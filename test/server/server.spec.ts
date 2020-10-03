import * as LibCrypto from "crypto";
import * as chai from "chai";
import * as sinon from "sinon";
import * as uuid from "uuid";
import * as moment from "moment";
import {Server} from "http";
import {Response as FetchResponse} from "node-fetch";

import * as UserDao from "../../src/dao/User";
import {User as UserModel} from "../../src/model/User";
import * as UserGeoDao from "../../src/dao/UserGeo";
import {UserGeo as UserGeoModel} from "../../src/model/UserGeo";
import {startServer} from "../../src/server/server";
import {Redis} from "../../src/database/Redis";
import {Config} from "../../src/config/Config";
import {Response} from "../../src/router/Router";

chai.use(require("chai-uuid"));
const expect = chai.expect;
const fetch = require("node-fetch");

const BASE_URL = `http://${Config.get("WEB_HOST", "127.0.0.1")}:${Config.get("WEB_PORT", "8081")}/api/v0.0.1`;

let server: Server;

const genFakeUser = () => {
  const genRandomStr = (len: number) => {
    return LibCrypto.randomBytes(len).toString("hex");
  };

  return {
    id: uuid.v4(),
    name: `fake name ${genRandomStr(5)}`,
    dob: moment().unix() - 31536000,
    address: `fake address ${genRandomStr(5)}`,
    description: `fake description ${genRandomStr(5)}`,
    createdAt: moment().unix() - 1000,
  } as UserModel;
};

before(() => {
  return new Promise((resolve) => {
    sinon.stub(Redis, "get").callsFake(() => {
      return {} as Redis;
    });
    sinon.stub(UserDao, "getUser").callsFake(async () => {
      return genFakeUser();
    });
    sinon.stub(UserDao, "createUser").callsFake(async () => {
      return "OK";
    });
    sinon.stub(UserDao, "updateUser").callsFake(async () => {
      return "OK";
    });
    sinon.stub(UserDao, "deleteUser").callsFake(async () => {
      return 1;
    });
    sinon.stub(UserGeoDao, "saveUserGeo").callsFake(async () => {
      return 1;
    });
    sinon.stub(UserGeoDao, "getNearbyUserIds").callsFake(async () => {
      return [uuid.v4(), uuid.v4()];
    });

    startServer().then((started: Server) => {
      server = started;
      resolve();
    });
  });
});

after(() => {
  sinon.restore();
  server.close();
});

describe("USER APIS", () => {
  describe("GET /user", () => {
    it("GET /user validation failure", () => {
      return fetch(`${BASE_URL}/user/1`)
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(-1);
          expect(json.data).to.include("\"value\" must be a valid GUID");
        });
    });

    it("GET /user mock", () => {
      return fetch(`${BASE_URL}/user/a610aea1-020e-4506-aeb4-f60018545ec6`)
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<UserModel>) => {
          expect(json.code).to.be.equal(200);
          expect(json.data).to.include.keys("id", "name", "dob", "address", "description", "createdAt");
          expect(json.data.name).to.include("fake name");
          expect(json.data.address).to.include("fake address");
          expect(json.data.description).to.include("fake description");
        });
    });
  });

  describe("POST /user", () => {
    it("POST /user validation failure", () => {
      return fetch(`${BASE_URL}/user`, {
        method: "POST",
        body: JSON.stringify(genFakeUser()),
        headers: {"Content-Type": "application/json"},
      })
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(-1);
          expect(json.data).to.include("\"id\" is not allowed");
        });
    });

    it("POST /user mock", () => {
      const fakeUser = genFakeUser();
      delete fakeUser["id"];

      return fetch(`${BASE_URL}/user`, {
        method: "POST",
        body: JSON.stringify(fakeUser),
        headers: {"Content-Type": "application/json"},
      })
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<UserModel>) => {
          expect(json.code).to.be.equal(200);
          expect(json.data).to.include.keys("id", "name", "dob", "address", "description", "createdAt");
          expect(json.data.name).to.include("fake name");
          expect(json.data.address).to.include("fake address");
          expect(json.data.description).to.include("fake description");
        });
    });
  });

  describe("PUT /user", () => {
    it("PUT /user validation failure", () => {
      const fakeUser = genFakeUser();
      delete fakeUser["id"];

      return fetch(`${BASE_URL}/user`, {
        method: "PUT",
        body: JSON.stringify(fakeUser),
        headers: {"Content-Type": "application/json"},
      })
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(-1);
          expect(json.data).to.include("\"id\" is required");
        });
    });

    it("PUT /user mock", () => {
      return fetch(`${BASE_URL}/user`, {
        method: "PUT",
        body: JSON.stringify(genFakeUser()),
        headers: {"Content-Type": "application/json"},
      })
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(200);
          expect(json.data).to.be.equal("OK");
        });
    });
  });

  describe("DELETE /user", () => {
    it("DELETE /user validation failure", () => {
      return fetch(`${BASE_URL}/user/1`, {method: "DELETE"})
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(-1);
          expect(json.data).to.include("\"value\" must be a valid GUID");
        });
    });

    it("DELETE /user mock", () => {
      return fetch(`${BASE_URL}/user/a610aea1-020e-4506-aeb4-f60018545ec6`, {method: "DELETE"})
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(200);
          expect(json.data).to.be.equal("OK");
        });
    });
  });
});

describe("USER GEO APIS", () => {
  describe("POST /usergeo", () => {
    it("POST /usergeo validation failure", () => {
      const fakeGeo = {
        id: uuid.v4(),
        longitude: "190",
        latitude: "32.1",
      } as UserGeoModel;

      return fetch(`${BASE_URL}/usergeo`, {
        method: "POST",
        body: JSON.stringify(fakeGeo),
        headers: {"Content-Type": "application/json"},
      })
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(-1);
          expect(json.data).to.include("\"longitude\" must be less than or equal to 180");
        });
    });

    it("POST /usergeo mock", () => {
      const fakeGeo = {
        id: uuid.v4(),
        longitude: "121.234",
        latitude: "32.112",
      } as UserGeoModel;

      return fetch(`${BASE_URL}/usergeo`, {
        method: "POST",
        body: JSON.stringify(fakeGeo),
        headers: {"Content-Type": "application/json"},
      })
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(200);
          expect(json.data).to.be.equal("OK");
        });
    });
  });

  describe("GET /usergeo/nearby", () => {
    it("GET /usergeo/nearby validation failure", () => {
      return fetch(`${BASE_URL}/usergeo/nearby/1`)
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string>) => {
          expect(json.code).to.be.equal(-1);
          expect(json.data).to.include("\"value\" must be a valid GUID");
        });
    });

    it("GET /usergeo/nearby mock", () => {
      return fetch(`${BASE_URL}/usergeo/nearby/a610aea1-020e-4506-aeb4-f60018545ec6`)
        .then((res: FetchResponse) => {
          expect(res.status).to.be.equal(200);
          return res.json();
        })
        .then((json: Response<string[]>) => {
          expect(json.code).to.be.equal(200);
          for (const [, id] of json.data.entries()) {
            // @ts-ignore
            expect(id).to.be.a.uuid("v4");
          }
        });
    });
  });
});

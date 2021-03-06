/**
 * Wiredcraft Backend Test
 * Wiredcraft Backend Test
 *
 * OpenAPI spec version: v0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import NearbyResponse from '../model/NearbyResponse';
import OkResponse from '../model/OkResponse';
import UserGeo from '../model/UserGeo';

/**
* UserGeo service.
* @module api/UserGeoApi
* @version v0.0.1
*/
export default class UserGeoApi {

    /**
    * Constructs a new UserGeoApi. 
    * @alias module:api/UserGeoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UserGeoApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NearbyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get nearby user ids by target userId
     * @param {module:api/UserGeoApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NearbyResponse}
     */
    getUser(id, callback) {
      let postBody = null;


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NearbyResponse;

      return this.apiClient.callApi(
        '/usergeo/nearby/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveUserGeo operation.
     * @callback module:api/UserGeoApi~saveUserGeoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * save user geo data, if data not exists it would be created, if exists then updated
     * @param {module:api/UserGeoApi~saveUserGeoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OkResponse}
     */
    saveUserGeo(body, callback) {
      let postBody = body;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OkResponse;

      return this.apiClient.callApi(
        '/usergeo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}

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
import OkResponse from '../model/OkResponse';
import User from '../model/User';
import UserResponse from '../model/UserResponse';

/**
* User service.
* @module api/UserApi
* @version v0.0.1
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/UserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create user data
     * @param {module:api/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
     */
    createUser(body, callback) {
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
      let returnType = UserResponse;

      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete user data
     * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OkResponse}
     */
    deleteUser(id, callback) {
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
      let returnType = OkResponse;

      return this.apiClient.callApi(
        '/user/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get user data by userId
     * @param {module:api/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResponse}
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
      let returnType = UserResponse;

      return this.apiClient.callApi(
        '/user/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update user data
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OkResponse}
     */
    updateUser(body, callback) {
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
        '/user', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}

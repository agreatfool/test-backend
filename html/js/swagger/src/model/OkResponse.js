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


import ApiClient from '../ApiClient';


/**
* The OkResponse model module.
* @module model/OkResponse
* @version v0.0.1
*/
export default class OkResponse {
    /**
    * Constructs a new <code>OkResponse</code>.
    * @alias module:model/OkResponse
    * @class
    */

    constructor() {
        
        
        
        
        
    }

    /**
    * Constructs a <code>OkResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OkResponse} obj Optional instance to populate.
    * @return {module:model/OkResponse} The populated <code>OkResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OkResponse();
                        
            
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} code
    */
    'code' = undefined;
    /**
    * @member {String} data
    */
    'data' = undefined;







}


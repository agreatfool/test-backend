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
* The RelationRequest model module.
* @module model/RelationRequest
* @version v0.0.1
*/
export default class RelationRequest {
    /**
    * Constructs a new <code>RelationRequest</code>.
    * @alias module:model/RelationRequest
    * @class
    */

    constructor() {
        
        
        
        
        
    }

    /**
    * Constructs a <code>RelationRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RelationRequest} obj Optional instance to populate.
    * @return {module:model/RelationRequest} The populated <code>RelationRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationRequest();
                        
            
            
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }

            if (data.hasOwnProperty('targetId')) {
                obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
            }
        }
        return obj;
    }

    /**
    * user id, shall be a string of uuid v4, length limit 36
    * @member {String} userId
    */
    'userId' = undefined;
    /**
    * user id, shall be a string of uuid v4, length limit 36
    * @member {String} targetId
    */
    'targetId' = undefined;







}

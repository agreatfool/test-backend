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
* The UserGeo model module.
* @module model/UserGeo
* @version v0.0.1
*/
export default class UserGeo {
    /**
    * Constructs a new <code>UserGeo</code>.
    * @alias module:model/UserGeo
    * @class
    */

    constructor() {
        
        
        
        
        
    }

    /**
    * Constructs a <code>UserGeo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserGeo} obj Optional instance to populate.
    * @return {module:model/UserGeo} The populated <code>UserGeo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGeo();
                        
            
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }

            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
            }

            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
            }
        }
        return obj;
    }

    /**
    * user id, shall be a string of uuid v4, length limit 36
    * @member {String} id
    */
    'id' = undefined;
    /**
    * longitude of a point, to avoid precision issue using string type
    * @member {String} longitude
    */
    'longitude' = undefined;
    /**
    * latitude of a point, to avoid precision issue using string type
    * @member {String} latitude
    */
    'latitude' = undefined;







}


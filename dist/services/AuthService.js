"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class AuthService {
    /**
     * User login
     * @param requestBody
     * @returns any Login successful
     * @throws ApiError
     */
    static authControllerLogin(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Check is user logged succesfully.
     * @returns IsUserLogged Login successful
     * @throws ApiError
     */
    static authControllerCheck() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/auth/check',
        });
    }
}
exports.AuthService = AuthService;

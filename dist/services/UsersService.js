"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class UsersService {
    /**
     * Create a new user (Admin required)
     * @param requestBody
     * @returns any User successfully created
     * @throws ApiError
     */
    static usersControllerCreate(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all users (Admin required)
     * @returns any List of users
     * @throws ApiError
     */
    static usersControllerFindAll() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }
    /**
     * Get user details by ID (Admin required)
     * @param id User ID
     * @returns any User details
     * @throws ApiError
     */
    static usersControllerFindOne(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Update user details (Admin required)
     * @param id User ID
     * @param requestBody
     * @returns any User successfully updated
     * @throws ApiError
     */
    static usersControllerUpdate(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete user (Admin required)
     * @param id User ID
     * @returns any User successfully deleted
     * @throws ApiError
     */
    static usersControllerRemove(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
exports.UsersService = UsersService;

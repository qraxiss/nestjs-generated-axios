/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IsUserLogged } from '../models/IsUserLogged';
import type { LoginDto } from '../models/LoginDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * User login
     * @param requestBody
     * @returns any Login successful
     * @throws ApiError
     */
    public static authControllerLogin(
        requestBody: LoginDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static authControllerCheck(): CancelablePromise<IsUserLogged> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/check',
        });
    }
}

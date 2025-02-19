import type { IsUserLogged } from '../models/IsUserLogged';
import type { LoginDto } from '../models/LoginDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AuthService {
    /**
     * User login
     * @param requestBody
     * @returns any Login successful
     * @throws ApiError
     */
    static authControllerLogin(requestBody: LoginDto): CancelablePromise<any>;
    /**
     * Check is user logged succesfully.
     * @returns IsUserLogged Login successful
     * @throws ApiError
     */
    static authControllerCheck(): CancelablePromise<IsUserLogged>;
}
//# sourceMappingURL=AuthService.d.ts.map
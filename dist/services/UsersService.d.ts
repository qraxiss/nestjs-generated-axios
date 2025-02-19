import type { CreateUserDto } from '../models/CreateUserDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class UsersService {
    /**
     * Create a new user (Admin required)
     * @param requestBody
     * @returns any User successfully created
     * @throws ApiError
     */
    static usersControllerCreate(requestBody: CreateUserDto): CancelablePromise<any>;
    /**
     * List all users (Admin required)
     * @returns any List of users
     * @throws ApiError
     */
    static usersControllerFindAll(): CancelablePromise<any>;
    /**
     * Get user details by ID (Admin required)
     * @param id User ID
     * @returns any User details
     * @throws ApiError
     */
    static usersControllerFindOne(id: string): CancelablePromise<any>;
    /**
     * Update user details (Admin required)
     * @param id User ID
     * @param requestBody
     * @returns any User successfully updated
     * @throws ApiError
     */
    static usersControllerUpdate(id: string, requestBody: UpdateUserDto): CancelablePromise<any>;
    /**
     * Delete user (Admin required)
     * @param id User ID
     * @returns any User successfully deleted
     * @throws ApiError
     */
    static usersControllerRemove(id: string): CancelablePromise<any>;
}
//# sourceMappingURL=UsersService.d.ts.map
export interface UserProfile {
    getPermissions(): string;
}
export declare class BasicUser implements UserProfile {
    getPermissions(): string;
}
export declare class UserDecorator implements UserProfile {
    protected user: UserProfile;
    constructor(user: UserProfile);
    getPermissions(): string;
}
export declare class AdminUser extends UserDecorator {
    getPermissions(): string;
}
export declare class GuestUser extends UserDecorator {
    getPermissions(): string;
}

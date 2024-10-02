export interface UserProfile {
    getPermissions(): string;
}

export class BasicUser implements UserProfile {
    getPermissions(): string {
        return 'Basic user permissions';
    }
}

export class UserDecorator implements UserProfile {
    protected user: UserProfile;

    constructor(user: UserProfile) {
        this.user = user;
    }

    getPermissions(): string {
        return this.user.getPermissions();
    }
}

export class AdminUser extends UserDecorator {
    getPermissions(): string {
        return `${this.user.getPermissions()}, Admin permissions`;
    }
}

export class GuestUser extends UserDecorator {
    getPermissions(): string {
        return `${this.user.getPermissions()}, Guest permissions`;
    }
}

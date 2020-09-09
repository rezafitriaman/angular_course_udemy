import { rejects } from 'assert';

export class AuthService {
    loggedIn = false;
    
    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('loggedIn', this.loggedIn)
                resolve(this.loggedIn);
            }, 1000);
        });
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
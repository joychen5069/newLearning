import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData{
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string

}

@Injectable({providedIn: 'root'})

export class AuthService{
    constructor(private http: HttpClient){

    }

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCZWeU-mikDwKffhsxiuA4UxnkMr8rUpS4',
        {
        email: email,
        password: password,
        returnSecureToken: true
        })
    }
}
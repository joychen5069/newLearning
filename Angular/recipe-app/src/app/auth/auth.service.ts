import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { process } from 'dotenv'

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
        // const APIKey=process.env.FIREBASE_API_KEY
        return this.http.post<AuthResponseData>(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCZWeU-mikDwKffhsxiuA4UxnkMr8rUpS4',
        {
        email: email,
        password: password,
        returnSecureToken: true
        }).pipe(catchError(errorRes =>{
            let errorMessage = 'An unknown error occurred';
            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage)
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = "this email already exists"
            }
            return throwError(errorMessage);
            
        }))
    }
}
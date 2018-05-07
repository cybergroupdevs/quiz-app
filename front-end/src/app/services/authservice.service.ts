import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import {HttpWrapperService} from '../services/http-wrapper.service';


@Injectable()
export class AuthService  {
    constructor(private http: Http, private _router: Router, private httpWrapper: HttpWrapperService) {
    }

    login(credentials) {

        console.log(this.httpWrapper.baseUrl);
        this.http.post(this.httpWrapper.baseUrl + '/api/user/session', credentials).
        subscribe((response) => {
            console.log(response);
            console.log(credentials);
            console.log('Hello.Session Api working');
            console.log(response.json());
            localStorage.setItem('tokenfordetails', response.json());
            const headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('x-auth', localStorage.getItem('tokenfordetails'));
            const options = new RequestOptions({headers: headers});

            this.http.get(this.httpWrapper.baseUrl + '/api/user/signin', options).
            subscribe((res) => {
                console.log(res.json());
                console.log('sign-in api working');
                this._router.navigate(['/managequiz']);
            });
        } , error => {
            console.log('Invalid Credentials');
            alert('Invalid Credentials');
        });
    }

    logout() {
        localStorage.removeItem('tokenfordetails');
        console.log('logged out successfully!');
        this._router.navigate(['/login']);
    }

    isLoggedIn() {
        return tokenNotExpired();
    }
    registration(userData) {
        this.http.post(this.httpWrapper.baseUrl + '/api/user/signup', userData).
        subscribe((request) => {
            console.log(request);
            console.log(userData);
            alert('REGISTRATION SUCCESSFUL');
            let credentials = {
                email : userData.email ,
                password : userData.password } ;
                this.login(credentials);

            });

        }
    }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/auth.response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private apiUrl = 'http://localhost:3000/api/auth/login';

	constructor(private http: HttpClient) {}

	login(credentials: { email: string; password: string }): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(this.apiUrl, credentials).pipe(
			tap((res: AuthResponse) => {
				localStorage.setItem('access_token', res.access_token);
			})
		);
	}

	getToken(): string | null {
		return localStorage.getItem('access_token');
	}

	logout(): void {
		localStorage.removeItem('access_token');
	}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DebtsResponseModel } from '../models/debts.response.model';

@Injectable({ providedIn: 'root' })
export class DebtService {
	private apiUrl = 'http://localhost:3000/api/debts';

	constructor(private http: HttpClient) {}

		getDebts(): Observable<DebtsResponseModel[]> {
			let token = '';
			if (typeof window !== 'undefined' && window.localStorage) {
				token = localStorage.getItem('access_token') || '';
			}
			const headers = new HttpHeaders({
				Authorization: token ? `Bearer ${token}` : ''
			});
			return this.http.get<DebtsResponseModel[]>(this.apiUrl, { headers });
		}

	createDebt(payload: import('../models/debts.request.model').DebtsRequestModel): Observable<any> {
		let token = '';
		if (typeof window !== 'undefined' && window.localStorage) {
			token = localStorage.getItem('access_token') || '';
		}
		const headers = new HttpHeaders({
			'Authorization': token ? `Bearer ${token}` : '',
			'Content-Type': 'application/json'
		});
		return this.http.post<any>(this.apiUrl, payload, { headers });
	}
}

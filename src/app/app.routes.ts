import { DebtsComponent } from './features/debts/list/debts.component';



import { LoginComponent } from './features/auth/login/login.component';
import { Route } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Route[] = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'debts', component: DebtsComponent }
];

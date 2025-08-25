import { DebtsComponent } from './features/debts/list/debts.component';



import { LoginComponent } from './features/auth/login/login.component';
import { Route } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { CreateDebtComponent } from './features/debts/create/create-debt.component';

export const routes: Route[] = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'debts', component: DebtsComponent },
    { path: 'debts/create', component: CreateDebtComponent }
];

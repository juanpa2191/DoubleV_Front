import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './features/auth/login/login.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { DebtsComponent } from './features/debts/list/debts.component';
import { CreateDebtComponent } from './features/debts/create/create-debt.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DebtsComponent,
    CreateDebtComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

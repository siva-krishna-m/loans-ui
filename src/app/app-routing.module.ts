import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: NewUserComponent },
  { path: 'forgot-password', component: ForgotComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '**', component: PageNotfoundComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./invoices/invoices.module').then((m) => m.InvoicesModule),
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'audit',
    loadChildren: () =>
      import('./audit/audit.module').then((m) => m.AuditModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'loans',
    loadChildren: () =>
      import('./loans/loans.module').then((m) => m.LoansModule),
  },
  {
    path: 'loan-types',
    loadChildren: () =>
      import('./loan-types/loan-types.module').then((m) => m.LoanTypesModule),
  },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'activity-audit', loadChildren: () => import('./activity-log/activity-log.module').then(m => m.ActivityLogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

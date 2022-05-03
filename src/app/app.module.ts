import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { counterReducer } from './state/reducers/counter.reducer';
import { reducers } from './state/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      SidebarComponent,
      FooterComponent,
      DashboardComponent,
      PageNotfoundComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomersModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

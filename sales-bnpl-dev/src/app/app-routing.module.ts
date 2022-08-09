import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SorryComponent } from './sorry/sorry.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationTypeComponent } from './registration-type/registration-type.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { CheckEligiblityComponent } from './check-eligiblity/check-eligiblity.component';
import { KycComponent } from './kyc/kyc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageLimitComponent } from './manage-limit/manage-limit.component';
import { ConvertToCreditCardComponent } from './convert-to-credit-card/convert-to-credit-card.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { UsageComponent } from './usage/usage.component'
import { EligibilityLimitComponent } from './eligibility-limit/eligibility-limit.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import  {LinkedAccountComponent} from './linked-account/linked-account.component'
 
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'getstarted',component:GetstartedComponent},
  {path:'login',component:LoginComponent},
  {path:'register-type',component:RegistrationTypeComponent},
  {path:'registration-details',component:RegistrationDetailsComponent},
  {path:'eligibility',component:CheckEligiblityComponent},
  {path:'eligibility-limit',component:EligibilityLimitComponent},
  {path:'kyc',component:KycComponent},
  {path:'dashboard',children:[
    {path:'',component:DashboardComponent},
    {path:'transaction-history',component:TransactionHistoryComponent},
    {path:'manage-limit',component:ManageLimitComponent},
    {path:'discover-ussage',component:UsageComponent},
    {path:'qr-code',component:ScanQrComponent},

  ]},
  {path:'convert-to-credit-card',component:ConvertToCreditCardComponent},
  {path:'linked-account',component:LinkedAccountComponent},
  {path:'**',component:SorryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent,
  SorryComponent,
  HomeComponent,
    SorryComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationTypeComponent,
    RegistrationDetailsComponent,
    CheckEligiblityComponent,
    KycComponent,
    DashboardComponent,
    ManageLimitComponent,
    ConvertToCreditCardComponent,
    TransactionHistoryComponent,
    ScanQrComponent,
    UsageComponent, 
    GetstartedComponent
]
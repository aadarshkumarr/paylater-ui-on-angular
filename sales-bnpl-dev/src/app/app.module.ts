import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoremoduleModule} from './coremodule/coremodule.module';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EligibilityLimitComponent } from './eligibility-limit/eligibility-limit.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';
import { OtpComponent } from './otp/otp.component';
import { FailureComponent } from './failure/failure.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GetstartedComponent } from './getstarted/getstarted.component';
import {MatMenuModule} from '@angular/material/menu';
import { LinkedAccountComponent } from './linked-account/linked-account.component';
import { ApplyCreditCardComponent } from './apply-credit-card/apply-credit-card.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [
    routingComponent,
    AppComponent,
    EligibilityLimitComponent,
    OtpComponent,
    FailureComponent,
    GetstartedComponent,
    LinkedAccountComponent,
    ApplyCreditCardComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    CoremoduleModule,
    FlexLayoutModule,
    MatBadgeModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    CarouselModule,
    MatMenuModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

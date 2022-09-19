import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { EntartaimentComponent } from './entartaiment/entartaiment.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoggedHeaderComponent } from './logged-header/logged-header.component';
import { UnloggedHeaderComponent } from './unlogged-header/unlogged-header.component';
import { NotificationComponent } from './notification/notification.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WalletComponent } from './userprofile/wallet/wallet.component';
import { SettingsComponent } from './userprofile/settings/settings.component';
import { OverviewComponent } from './userprofile/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    EntartaimentComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    LoggedHeaderComponent,
    UnloggedHeaderComponent,
    NotificationComponent,
    MailboxComponent,
    UserprofileComponent,
    WalletComponent,
    SettingsComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

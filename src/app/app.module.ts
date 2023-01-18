//Living base modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular cli components
import { AppComponent } from './app.component';
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
import { TopupComponent } from './userprofile/topup/topup.component';
import { SendmailComponent } from './sendmail/sendmail.component';

//angular material modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'; 

//services
import { UserService } from './user.service';
import { MsgSendComponent } from './mailbox/msg-send/msg-send.component';



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
    TopupComponent,
    SendmailComponent,
    MsgSendComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [AppComponent, UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { EntartaimentComponent } from './entartaiment/entartaiment.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MailboxComponent } from './mailbox/mailbox.component'
import { NotificationComponent } from './notification/notification.component'
import { UserprofileComponent } from './userprofile/userprofile.component'
import { SettingsComponent } from './userprofile/settings/settings.component';
import { WalletComponent } from './userprofile/wallet/wallet.component';
import { TopupComponent } from './userprofile/topup/topup.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { UserResolver } from './user.resolver';
import { UserWalletResolver } from './user-wallet.resolver';


const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full', },
  { path: 'entartaiment', component: EntartaimentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'userprofile', component: UserprofileComponent, resolve: { user: UserResolver } },
  { path: 'wallet', component: WalletComponent, resolve: { user: UserWalletResolver } },
  { path: 'settings', component: SettingsComponent },
  { path: 'topup', component: TopupComponent },
  { path: 'sendmail', component: SendmailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class AppRoutingModule { }

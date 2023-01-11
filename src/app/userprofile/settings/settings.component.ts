import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service'
import { AppComponent } from '../../app.component'
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class SettingsComponent implements OnInit {

  constructor(private us: UserService, private ac:AppComponent, private http:HttpClient, private fb: UntypedFormBuilder, private router: Router) { }

  selectedFile!: File;
  accessorFile:boolean | undefined;

  userPhrase: any = this.fb.group({
    favPhrase: ['']
  })
  changePassword: any = this.fb.group({
    currentPassword: [''],
    newPassword: ['']
  })
  changeNickname: any = this.fb.group({
    newNickname: ['']
  })
  changeEmail: any = this.fb.group({
    newEmail: ['']
  })
  
  onFileChanged(event:any) {
    const file = event.target.files[0];
    this.selectedFile = file;
    console.log(this.selectedFile)
  }
  
  onUpload() {
    const uploadData = new FormData();

    uploadData.append('file', this.selectedFile, `${localStorage.getItem('your_nickname')}.png`);
    const req = new HttpRequest('POST', `http://localhost:8080/upload`, uploadData, {
      reportProgress: true,
      responseType: 'json'
    })
    // console.log(uploadData)
    this.http.request(req).subscribe(res=>{})//console.log(res)
    this.us.patchUserAvatar(JSON.parse(localStorage.getItem('your_id') || '{}'), JSON.stringify(localStorage.getItem('your_nickname') || '{}').slice(1,-1)).subscribe(res=>{console.log(res)})
  }

changeFavPhrase():void {
    let { favPhrase} = this.userPhrase.value;
    this.us.patchNewFavPhraseToUser(JSON.parse(localStorage.getItem('your_id') || '{}'), favPhrase).subscribe(res=>{console.log(res);this.router.navigate(['userprofile'])});
  }
ChangePassword():void{

  let { currentPassword, newPassword} = this.changePassword.value;
  let cPass:any = {};
  this.us.getYourPassword(JSON.parse(localStorage.getItem('your_id') || '{}')).subscribe(res=>{
    cPass=res;
    console.log(cPass.password)
    if( cPass.password == currentPassword ){
      this.us.patchNewPassword(JSON.parse(localStorage.getItem('your_id') || '{}'), newPassword).subscribe(res=>{console.log(res);this.router.navigate(['userprofile'])})
    } else {
      console.warn("Your current pass isn't right")
    }
  });
}

ChangeNickname():void{
  let { newNickname} = this.changeNickname.value;
  this.us.patchNewNickname(JSON.parse(localStorage.getItem('your_id') || '{}'), newNickname).subscribe(res=>{console.log(res);this.router.navigate(['userprofile'])})
}

ChangeEmail():void{
  let { newEmail} = this.changeEmail.value;
  this.us.patchNewEmail(JSON.parse(localStorage.getItem('your_id') || '{}'), newEmail).subscribe(res=>{console.log(res);this.router.navigate(['userprofile'])})
}



  ngOnInit(): void {
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
}

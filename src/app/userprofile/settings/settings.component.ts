import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service'
import { AppComponent } from '../../app.component'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class SettingsComponent implements OnInit {

  constructor(private us: UserService, private ac:AppComponent, private http:HttpClient, private fb: UntypedFormBuilder) { }

  selectedFile!: File;

  userPhrase: any = this.fb.group({
    favPhrase: ['']
  })
  
  onFileChanged(event:any) {
    const file = event.target.files[0];
    this.selectedFile = file;
    // console.log(this.selectedFile)
  }
  
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    const req = new HttpRequest('POST', `http://localhost:8080/upload`, uploadData, {
      reportProgress: true,
      responseType: 'json'
    })
    // console.log(uploadData)
    this.http.request(req).subscribe(res=>{})//console.log(res)
  }

  changeFavPhrase():void {
    const { favPhrase} = this.userPhrase.value;
    
    this.us.putNewFavPhraseToUser(JSON.parse(localStorage.getItem('your_id') || '{}'), favPhrase).subscribe(res=>{console.log(res)})
  }



  ngOnInit(): void {
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
}

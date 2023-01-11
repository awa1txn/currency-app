import { Component, OnInit } from '@angular/core';
import { TopupValidator } from '../../topup.validator';
import { UserService } from '../../user.service'
import { AppComponent } from '../../app.component'
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss']
})
export class TopupComponent implements OnInit {

  moneyTypeAceeptedList:any = ['bitcoin', 'euro', 'dollar']
  data:any;

  topup: any = this.fb.group({
    moneytype: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  },
  {
    validator: [
      TopupValidator('moneytype', this.moneyTypeAceeptedList)
    ]
  })

  constructor(private us: UserService, private ac:AppComponent, private fb: UntypedFormBuilder, private router:Router) { }

  moneytopup():void{
    let userWallet = {
      ...this.topup.value
    }
    this.us.getUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}')).subscribe(res=>{
      this.data = res;
      if(userWallet.moneytype =='dollar'){
        if(this.data.wallet[0] == undefined){
          this.data.wallet[0] = userWallet;
          this.us.patchUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}'), this.data.wallet).subscribe(res=>{console.log(res);this.router.navigate(['wallet'])})
        } else {
          this.data.wallet[0].amount += userWallet.amount;
          this.us.patchUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}'), this.data.wallet).subscribe(res=>{console.log(res);this.router.navigate(['wallet'])})
        }
      }
      if(userWallet.moneytype =='euro'){
        if(this.data.wallet[1] == undefined){
          this.data.wallet[1] = userWallet;
          this.us.patchUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}'), this.data.wallet).subscribe(res=>{console.log(res);this.router.navigate(['wallet'])})
        } else {
          this.data.wallet[1].amount += userWallet.amount;
          this.us.patchUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}'), this.data.wallet).subscribe(res=>{console.log(res);this.router.navigate(['wallet'])})
        }
      }
      if(userWallet.moneytype =='bitcoin'){
        if(this.data.wallet[2] == undefined){
          this.data.wallet[2] = userWallet;
          this.us.patchUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}'), this.data.wallet).subscribe(res=>{console.log(res);this.router.navigate(['wallet'])})
        } else {
          this.data.wallet[2].amount += userWallet.amount;
          this.us.patchUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}'), this.data.wallet).subscribe(res=>{console.log(res);this.router.navigate(['wallet'])})
        }
      }

    })
    // this.us.patchUserWallet(JSON.parse(localStorage.getItem('your_id') || '{}'), userWallet)
  }

  ngOnInit(): void {
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }

}

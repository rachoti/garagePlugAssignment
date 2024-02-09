import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase/firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputValidationService } from '../../shared/services/input-validation/input-validation.service';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { login } from '../../shared/state/auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      InputValidationService.validEmail,
    ]),
    password: new FormControl('',[
      Validators.required,
    ])
  });  
  constructor(
    private firebaseService: FirebaseService,
    private store: Store<{username: string, password:string}>
  ) { }

  ngOnInit() { 
    
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password
    if(email && password){
      this.store.dispatch(login({ username: email, password: password }))
    }

    // this.firebaseService.login( "rachayya.rk@gmail.com", "TestApp@123").then(res =>{
    // });
    // this.firebaseService.login( "rachayya.rk@gmail.com", "TestApp@123");
  }
  
  signInWithPopUp() {
    this.firebaseService.clickToSignIn().then(res =>{
      console.log("res",res)
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {Customer, FirebaseDataService} from 'library-app';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  customer: Customer;
  loginFormGroup: FormGroup;
  customerArray: Customer[];
  customerId: string;

  constructor(private router: Router, private _FirebaseDataService: FirebaseDataService) {
  }

  ngOnInit(): void {
    this.customer = new Customer({});
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  gotoSignup() {

    this.router.navigate(['/main/', 'signup']);
  }

  login() {
    console.log(this.customer);
    console.log(this.loginFormGroup);
    //
    let isValid = true;

    for (let key in this.loginFormGroup.controls) {
      console.log(key);
      console.log(this.loginFormGroup.get(key));
      if (this.loginFormGroup.get(key).invalid) {
        isValid = false;
      }
    }

    if (!isValid) {
      alert('The form is invalid');
      this.router.navigate(['/main/', 'login']);
    } else {
      this.customer = new Customer({});
      this.customer.email = this.loginFormGroup.get('email').value;
      this.customer.password = this.loginFormGroup.get('password').value;

      this._FirebaseDataService.signIn(this.customer)
        .then((customer) => {
          console.log('cus = ' + this.customerId);

          if (customer.id === null) {
            alert('the entered email or password is invalid');
          }
          this.router.navigate(['/main/', 'rest']);

          // saving customer in localstorage

          localStorage.setItem('CustomerID', customer.id);


        });

    }

  }
}

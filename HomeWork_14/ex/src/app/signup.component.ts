import { Component, OnInit, Directive } from '@angular/core';
import { map, debounceTime } from 'rxjs/operators'

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS
} from "@angular/forms"
import { Observable, Subject } from 'rxjs'
import { ServiceService } from './service.service';
import { debounce } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  private emailTimeout;
  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.myForm = formBuilder.group({
      'signup': formBuilder.group({
        'firstname': [],
        'lastname': [],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),
          this.asyncEmailValidator.bind(this)
        ]],
        'password': ['', Validators.required],
        'confirmpassword': [],
        'checkbox': []
      })
    })
    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }
  onSubmit() {
    console.log(this.myForm);
  }
  asyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    clearTimeout(this.emailTimeout);
    return new Promise((resolve, reject) => {
      this.emailTimeout = setTimeout(() => {
        this.service.isuserexist({ email: control.value }).subscribe(
          response => resolve(null),
          error => resolve({ invalid: true }));
      }, (600));
    });


  }




  ngOnInit() {
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.myForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log(invalid)
      }
    }

    return invalid;
  }
}



import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms"
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'loginData': formBuilder.group({
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'password': ['', Validators.required],
      })
    });

    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    )
  }

  ngOnInit() {
  }

}

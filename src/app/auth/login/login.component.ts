import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      // firstname: new FormControl('', Validators.required),
      // lastname: new FormControl('', Validators.required),
      // username: new FormControl('', Validators.required),
      // dob: new  FormControl('', Validators.required),
      // mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
      // type: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  submit() {
  }
}

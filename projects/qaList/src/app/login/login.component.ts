import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User as ParseUser } from 'parse';
import { QuestServiceService } from '../services/quest-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private parseService: QuestServiceService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get loginFromControls() {
    return this.loginForm.controls;
  }

  clearButton() {
    this.loading = false;
  }

  async onSubmit() {
    this.loading = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const user = await this.parseService.loginUser(
      this.loginFromControls.username.value,
      this.loginFromControls.password.value
    );
    if (user) {
      console.log('LoginComponent.login SUCCESS');

      this.router.navigate([this.returnUrl]);
    }
  }
}

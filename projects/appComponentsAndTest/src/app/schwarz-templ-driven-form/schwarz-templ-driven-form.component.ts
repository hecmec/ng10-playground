import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * Simple template-driven form from s
 * https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656460#overview
 */
@Component({
  selector: 'app-schwarz-templ-driven-form',
  templateUrl: './schwarz-templ-driven-form.component.html',
  styleUrls: ['./schwarz-templ-driven-form.component.scss']
})
export class SchwarzTemplDrivenFormComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    console.log(form);
    
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
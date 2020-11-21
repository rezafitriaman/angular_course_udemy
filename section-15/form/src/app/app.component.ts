import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm | undefined
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* this.signupForm?.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    }) */
    this.signupForm?.form.patchValue({
      userData: {
        username: suggestedName
      },
    })
  }
  /* onSubmit(form: NgForm) {
    console.log('submitted')
    console.log(form)
  } */
  onSubmit() {
    console.log(this.signupForm)
  }
}

// TODO 198 using form data
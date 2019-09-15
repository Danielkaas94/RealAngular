import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testForm: FormGroup;

  constructor() { }


  ngOnInit() {
    this.testForm = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')        
      ])),
      category: new FormControl(''),
      text: new FormControl('', Validators.required),
      // year: new FormControl('', this.yearValidator),

    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {'year': true}
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    console.log(this.testForm.value);
  }
}
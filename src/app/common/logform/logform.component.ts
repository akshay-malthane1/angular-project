import {Component, EventEmitter, Input, OnChanges, OnInit, Output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent implements OnInit, OnChanges {
  @Input() Title2;
  @Input() inputFields: any = [];
  @Input() submitButton;
  @Output() getData = new EventEmitter<any>();
  baseForm: any;

  constructor() {
  }

  ngOnChanges(): void {
    const tempObject = {};
    this.inputFields.forEach(item => {
      tempObject[item.inputName] = new FormControl('', [Validators.required, Validators.minLength(3)]);
    });
    this.baseForm = new FormGroup(tempObject);
    // console.log(this.baseForm);
  }

  ngOnInit(): void {
    // console.log(this.baseForm);
  }
  submitForm(): void {
    // console.log(this.baseForm.getRawValue());
    this.getData.emit(this.baseForm.getRawValue());
  }
}

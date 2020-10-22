import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/common.services/auth.service';

describe('LoginComponent', () => {
  let fixture: any;
  let component: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
});

  it('should initialize loginForm', () => {
      const loginForm = {
        username: '',
        password: ''
      };
      expect(component.loginForm.value).toEqual(loginForm);
});
  it('should invalidate form', () => {
  component.loginForm.controls.username.setValue('');
  component.loginForm.controls.password.setValue('');
  expect(component.loginForm.valid).toBeFalsy();
});
  it('should validate the form', () => {
    component.loginForm.controls.username.setValue('akshay');
    component.loginForm.controls.password.setValue('password')
    expect(component.loginForm.valid).toBeTruthy();
  });
  
});

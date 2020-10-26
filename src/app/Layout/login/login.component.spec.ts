import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/common/auth.service';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let component: LoginComponent;
  let AuthServiceMock: Partial<AuthService>;



  beforeEach(async () => {
      TestBed.configureTestingModule({
        declarations: [ LoginComponent ],
        imports: [
          ReactiveFormsModule,
          FormsModule,
          RouterTestingModule,
          HttpClientTestingModule ],
        providers: [{ provide: AuthService, useValue: AuthServiceMock }]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service  = TestBed.inject(AuthService);
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
    component.loginForm.controls.password.setValue('password');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should assert "getLogin" has been called', () => {
    spyOn(AuthServiceMock, 'getLogin').and.returnValue;
    expect(AuthServiceMock.getLogin).toHaveBeenCalled();
  });

  // it('should login user if form is validate and should navigate user to details', () => {
  //   component.loginForm.setValue({username: 'akshay', password: 'malthane'});
  //   spyOn(component.router, 'navigate');
  //   component.performLogin();
  //   expect(component.router.navigate).toHaveBeenCalled();
  // });

  // it('should call getLinks and return list of products', fakeAsync(() => {
  //   const response: Product[] = [];
  //   spyOn(commonServiceMock, 'getLink').and.returnValue(of(response));
  //   component.getLinks();
  //   fixture.detectChanges();
  //   expect(component.products).toEqual(response);
  //   }));
});

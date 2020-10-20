import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../common.services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/common.services/crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profile = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  onSubmit(): void{
    const user = this.profile.getRawValue();
    this.crud.createUser(user).subscribe(res => {
      alert('your account has been created,please login tyo continue');
      this.navigateToLogin()
    }
      )
  }

  constructor(private crud: CrudService, private router: Router ) { }
navigateToLogin(): void{
  this.router.navigate(['login']);
}
  ngOnInit(): void { }
}

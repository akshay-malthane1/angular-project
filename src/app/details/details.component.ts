import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ray: Object;
  user:any;
  isEdit=false;

  userObj={
    firstname:'',
    email:'',
    password:'',
    id:''
  }

  constructor(private myService: CrudService) {}
  ngOnionit(){
    this.getLatestUser()
  }

  addUser(formObj){
    console.log(formObj)
    this.myService.createUser(formObj).subscribe((response)=> {
      console.log("user added")
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.myService.getAllUser().subscribe((response)=>{
      this.ray = response
    })
  }
  editUser(user){
    this.isEdit= true;
    this.userObj = user;
  }

  deleteUser(user){
    this.myService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUser(){
    this.isEdit=!this.isEdit;
    this.myService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataArray = [
    {src: "assets/guitar2.jpg", title: 'Buy Electric Guitar', price: "$19.99"},
    {src: "assets/guitar3.jpg", title: 'Buy Electric Guitar', price: "$23.99"},
    {src: "assets/guitar10.jpg", title: 'Buy Electric Guitar', price: "$25.99"},
    {src: "assets/guitar5.jpg", title: 'Buy Electric Guitar', price: "$21.99"},
    {src: "assets/guitar6.jpg", title: 'Buy Electric Guitar', price: "$28.99"},
    {src: "assets/guitar7.jpg", title: 'Buy Electric Guitar', price: "$18.99"}     
   ];;
  constructor() { }
  ngOnInit(): void {    
  }

}

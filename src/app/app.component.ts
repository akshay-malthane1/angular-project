import { Component, OnInit } from '@angular/core';
import { DataService } from './common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  ngOnInit(): void { }
  constructor(private dataService: DataService) {
  }
  changeOfRoute(): void{
    this.dataService.emitNewValue('next value');
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent  {

   artist = [
    {src: 'assets/music3.jpg', },
    {src: 'assets/music.jpg', },
    {src: 'assets/music4.jpg', }

  ];
}

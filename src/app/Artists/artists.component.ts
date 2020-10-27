import { Component } from '@angular/core';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent  {

   artist = [
    {src: 'assets/artist1.jpg', },
    {src: 'assets/artist2.jpg', },
    {src: 'assets/artist3.jpg', },
    {src: 'assets/artist6.jpg', },

  ];
}

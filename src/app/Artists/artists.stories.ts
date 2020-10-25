
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ArtistsComponent } from './artists.component';


storiesOf('Themes Component', module)
.add('My Themes', () => ({
    component: ArtistsComponent,
       props: {}
   }));


import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ArtistsComponent } from './artists.component';


storiesOf('Artists Component', module)
.add('our Artists', () => ({
    component: ArtistsComponent,
       props: {}
   }));

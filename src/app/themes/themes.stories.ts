
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ThemesComponent } from './themes.component';


storiesOf('Themes Component', module)
.add('My Themes', () => ({
    component: ThemesComponent,
       props: {}
   }))
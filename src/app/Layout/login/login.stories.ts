import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LoginComponent } from './login.component';


storiesOf('Login Component', module)
.add('Logggged inn', () => ({
    component: LoginComponent,
       props: {}
   }))
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HttpClientModule} from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { DarkService } from 'src/app/common.services/dark.service';


storiesOf('Header Component', module)
.addDecorator(
    moduleMetadata({
        imports: [HttpClientModule, FormControl],
        declarations: [HeaderComponent],
        providers: [DarkService]
    })
)
.add('MY', () => ({
 component: HeaderComponent,
    props: {}
}))


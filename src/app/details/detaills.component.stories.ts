import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DetailsComponent } from './details.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from '../auth.service';

storiesOf('Details Component', module)
.addDecorator(
    moduleMetadata({
        imports: [HttpClientModule],
        declarations: [DetailsComponent],
        providers: [AuthService]
    })
)
.add('to storybook', () => ({
 component: DetailsComponent,
    props: {}
}))
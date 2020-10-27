import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story } from '@storybook/angular';
import { LogformComponent } from './logform.component';

export default {
    title: 'Form',
    argTypes: { onClick: { action: 'clicked' } },

    component: LogformComponent,
    decorators: [
        moduleMetadata({
            declarations: [LogformComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule,],
        }),
    ],
};

const Template: Story<LogformComponent> = () => ({
    component: LogformComponent,
    props: {
        Title2: 'LOGIN',
        inputFields: [{
            inputName: 'Username',
            inputType: 'text',
            inputPlaceholder: 'username'
        },
        {
            inputName: 'Password',
            inputType: 'password',
            inputPlaceholder: 'password'
        }
        ],
        submitButton: 'Login',
    },

    template: `<app-logform
        [Title2]="Title2"
        [inputFields]="inputFields"
        [submitButton]="submitButton"

        >
        </app-logform>`,
});
export const Base = Template.bind({});

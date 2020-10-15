import {storiesOf, moduleMetadata } from '@storybook/angular';
import {TodoComponent, Todo } from './todo.component';
import { action } from '@storybook/addon-actions'

const todo: Todo ={
    title: 'some todo item I need todo',
    done: false
}
export const actions = {
   onDone: action('onDone')
};

storiesOf('todo', module)
.addDecorator(
    moduleMetadata({
declarations:[TodoComponent]
}))
.add('todo has not been done', () => {
    return {
        template:'<app-todo [todo]="todo"> </app-todo>',
        props:{
            todo
        }
    }
})
.add('todo has been done', () => {
    return {
        template:'<app-todo [todo]="todo" (onDone)="onDone($event)"> </app-todo>',
        props:{
            todo: {...todo, done:true},
            onDone: actions.onDone
        }
    }
})
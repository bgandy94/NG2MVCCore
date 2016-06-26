import {Component} from '@angular/core';
@Component({
    selector: 'about-app',
    template: `<h2>Hello, {{title}}</h2>
               <input [(ngModel)]="title" placeholder="name" />
`
})
export class AppComponent {

    title: string;

}
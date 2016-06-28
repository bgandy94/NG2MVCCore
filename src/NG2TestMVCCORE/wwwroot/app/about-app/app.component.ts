import {Component} from '@angular/core';
@Component({
    selector: 'about-app',
    template: `<h2>Hello, {{title}}</h2>
               <input [(ngModel)]="title" placeholder="name" />
                <h2 *ngIf="showH2">*NGIF IS WORKING!</h2>
`
})
export class AppComponent {
    title: string;
    showH2: boolean = false;

    if(this.title.length > 0){

    
}
}
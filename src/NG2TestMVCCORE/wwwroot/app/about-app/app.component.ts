import {Component} from '@angular/core';
@Component({
    selector: 'about-app',
    template: `<h2>Hello, {{title}}</h2>
               <input (keyup)="checkTitle()" [(ngModel)]="title" placeholder="name" />
                <h2 *ngIf="showH2">*NGIF IS WORKING!</h2>
`
})
export class AppComponent {
    title: string = "";
    showH2: boolean = false;

    checkTitle = function() {
        if (this.title.length > 0) {
            this.showH2 = true;
        } else {
            this.showH2 = false;
        }
        return this.showH2;
    }
    

    
}
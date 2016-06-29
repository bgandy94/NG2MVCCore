import {Component} from '@angular/core';
@Component({
    selector: 'about-app',
    templateUrl: './app/about-app/app.component.html'
})
export class AppComponent {
    title: string = "";
    title2: string = "";
    showH2: boolean = false;

    checkTitles = function() {
        if (this.title.length > 0 && this.title2.length > 0) {
            this.showH2 = true;
        } else {
            this.showH2 = false;
            this.showH2 = true;
        }
        return this.showH2;
    }
    

    
}
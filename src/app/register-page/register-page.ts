import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'register-page',
    templateUrl: 'register-page.html',
    styleUrls: ['./register-page.scss']
})
export class RegisterPage implements OnInit {
    constructor(
        public app: AppService
    ) { }

    ngOnInit() { }
}
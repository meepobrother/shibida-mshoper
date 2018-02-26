import { Component, OnInit } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.html',
    styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnInit {
    constructor(
        public app: AppService
    ) { }

    ngOnInit() { }
}
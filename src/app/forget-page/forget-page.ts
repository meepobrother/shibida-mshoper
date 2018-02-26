import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'forget-page',
    templateUrl: 'forget-page.html',
    styleUrls: ['./forget-page.scss']
})
export class ForgetPage implements OnInit {
    constructor(
        public app: AppService
    ) { }

    ngOnInit() { }
}
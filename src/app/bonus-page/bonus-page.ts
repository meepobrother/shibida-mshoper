import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'bonus-page',
    templateUrl: 'bonus-page.html',
    styleUrls: ['./bonus-page.scss']
})
export class BonusPage implements OnInit {
    constructor(
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient
    ) { }

    ngOnInit() { }

    home() {
        this.router.go('home', {});
    }
}

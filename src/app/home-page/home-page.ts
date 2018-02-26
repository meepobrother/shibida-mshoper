import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'home-page',
    templateUrl: 'home-page.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }
    ngOnInit() { }

    onItem(item: any) {
        this.router.go(item.do, {});
    }
}

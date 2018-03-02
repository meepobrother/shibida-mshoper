import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'ansyc-page',
    templateUrl: 'ansyc-page.html',
    styleUrls: ['./ansyc-page.scss']
})
export class AnsycPage implements OnInit {
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

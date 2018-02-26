import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'carfiles-list',
    templateUrl: 'carfiles-list.html',
    styleUrls: ['./carfiles-list.scss']
})
export class CarfilesListPage implements OnInit {
    page: number = 0;
    psize: number = 20;
    list: any[] = [];
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }

    ngOnInit() {
        this.init();
    }

    init() {
        const url = this.app.getMobileUrl('getCarfilesList', { page: this.page, psize: this.psize });
        this.http.get(url).subscribe((res: any[]) => {
            this.list = res;
        });
    }
}

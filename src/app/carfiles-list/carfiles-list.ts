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
    list: any[] = [];
    keyword: string;
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }

    ngOnInit() {
        this.init();
    }

    init() {
        const url = this.app.getMobileUrl('open', {
            open: 'shibida/car/list',
            m: 'runner_open',
            k: this.keyword ? this.keyword : ''
        });
        this.http.get(url).subscribe((res: any[]) => {
            this.list = res;
        });
    }

    getItems(k: any) {
        this.keyword = k.target.value;
        this.init();
    }

    goUrl(router: string, carNum: string) {
        this.router.go(router, {
            carNum: carNum
        });
    }

    add() {
        this.router.go('carNum');
    }
}

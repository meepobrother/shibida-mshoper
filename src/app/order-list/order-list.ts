import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'order-list',
    templateUrl: 'order-list.html',
    styleUrls: ['./order-list.scss']
})
export class OrderListPage implements OnInit {
    list: any = [];
    selector: string = '.search-results';
    allList: any[] = [];
    page: number = 1;
    psize: number = 30;
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }

    ngOnInit() {
        this.http.get(this.app.getMobileUrl('open', {
            open: 'shibida/order/list',
            m: 'runner_open'
        })).subscribe((res: any[]) => {
            this.allList = res;
            this.onScrollUp();
        });
    }

    nextPage() {
        this.page = this.page + 1;
        let start = (this.page - 1) * this.psize;
        this.list = [...this.list, ...this.allList.splice(start, this.psize)];
    }

    refreshDate() {
        this.page = 0;
        this.list = [];
        this.nextPage();
    }

    onScroll() {
        this.nextPage();
    }

    onScrollUp() {
        this.refreshDate();
    }

    add() {
        this.router.go('billing');
    }

    getItems(e: any) {
        let value = e.target.value;
    }

    call(m: string) {
        location.href = `tel:${m}`;
    }

    editOrder(item) {
        console.log(item);
        this.app.refreshForm(item);
        this.router.go('billing');
    }
}

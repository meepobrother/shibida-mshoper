import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'service-page',
    templateUrl: 'service-page.html',
    styleUrls: ['./service-page.scss']
})
export class ServicePage implements OnInit {
    goods: any[] = [
        { title: '测试一', items: [] }
    ];
    goodActive: any;
    constructor(
        public http: HttpClient,
        public router: We7RouterService,
        public app: AppService
    ) { }
    ngOnInit() { 
        const url = this.app.getMobileUrl('getgroupservice');
        this.http.get(url).subscribe((res: any) => {
            this.goods = res;
            let has = false;
            this.goods = this.goods || [];
            this.goods.map(res => {
                if (res.active) {
                    this.goodActive = res;
                    has = true;
                }
            });
            if (!has) {
                this.goodActive = this.goods.length > 1 ? this.goods[0] : null;
                if (this.goods.length > 0) {
                    this.goods[0].active = true;
                }
            }
        });
    }

    onItem(item: any) {
        this.goodActive = item;
        this.goods.map(res => {
            res.active = false;
        });
        item.active = true;
    }

    next() {
        this.router.go('billing', {});
    }
}

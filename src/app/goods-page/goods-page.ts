import { Component, OnInit } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
@Component({
    selector: 'goods-page',
    templateUrl: './goods-page.html',
    styleUrls: ['./goods-page.scss']
})
export class GoodsPage implements OnInit {
    goodActive: any;
    goodsSelects: any[] = [];
    goods: any[] = [];
    isBilling: boolean = false;
    constructor(
        public router: We7RouterService,
        public http: HttpClient,
        public app: AppService
    ) { }

    ngOnInit() {
        const url = this.app.getMobileUrl('open', {
            open: 'shibida/goodsgroup/goods',
            m: 'runner_open'
        });
        this.http.get(url).subscribe((res: any) => {
            this.goods = res;
            let has = false;
            this.goods = this.goods || [];
            this.goods.map(res => {
                if (res.active) {
                    this.onItem(res);
                    has = true;
                }
            });
            if (!has) {
                this.goodActive = this.goods.length > 1 ? this.goods[0] : null;
                if (this.goods.length > 0) {
                    this.onItem(this.goods[0]);
                }
            }

        });
        this.isBilling = this.router.get('billing') === 'true';
    }

    onItem(item: any) {
        this.goodActive = item;
        this.goods.map(res => {
            res.active = false;
        });
        item.active = true;
        this.updateGoods();
    }

    selectGoods(item: any) {
        this.goodsSelects.push(item);
    }

    next() {
        this.app.form.get('goods').setValue(this.goodsSelects);
        this.router.go('billing', { cacheId: 'goods' });
    }

    addGroup() {
        this.router.go('goodsGroupAdd', {});
    }

    addGoods(group_id) {
        this.router.go('goodsAdd', { groupId: group_id, fid: this.goodActive.id });
    }

    updateGoods() {
        this.goodActive.items.map(item => {
            let goods = this.app.form.get('goods').value;
            goods = goods || [];
            item.items.map(i => {
                goods.map(good => {
                    if (i.id === good.id) {
                        i.num = good.num;
                    }
                });
            });
        });
    }
    info: string = '';
    addToCat(num, good) {
        good['num'] = num;
        let goods = this.app.form.get('goods').value;
        goods = goods || [];
        let has = false;
        let index = -1;
        goods.map((res, i) => {
            if (res.id === good.id) {
                res.num = good.num;
                index = i;
                has = true;
            }
        });
        if (!has) {
            goods.push(good);
        } else {
            if (num === 0) {
                goods.splice(index, 1)
            }
        }
        this.app.form.get('goods').setValue(goods);
        console.log(goods);
    }

    back() {
        this.router.go('billing');
    }
}
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'billing-page',
    templateUrl: 'billing-page.html',
    styleUrls: ['./billing-page.scss']
})
export class BillingPage implements OnInit {
    data: any = {};
    isBilling: boolean = true;
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService,
        public fb: FormBuilder
    ) { }

    clearCache() {
        localStorage.removeItem('shibida:form');
        this.app.initForm();
    }

    ngOnInit() {
        this.data.carNum = decodeURI(this.router.get('carNum'));
        this.data.carId = decodeURI(this.router.get('carId'));
        const url = this.app.getMobileUrl('open', {
            open: 'shibida/car/check',
            carId: this.data.carId || 0,
            carNum: this.data.carNum || '',
            m: 'runner_open'
        });
        this.http.get(url).subscribe((res: any) => {
            if (res.status === 0) {
                const item = res.data || { carNum: '' };
                this.data = item;
                this.app.form.get('car_num').setValue(item.car_num);
                this.app.form.get('car_id').setValue(item.id);
                this.app.form.get('tid').setValue(this.guid());
            }
        });
        this.data.carId = this.router.get('carId');
        this.data.carCheck = JSON.parse(localStorage.getItem('carCheck:' + this.data.carId));
        this.isBilling = this.router.get('billing') === 'true';
    }

    addOrEditCar() {
        this.router.go('carNum', {});
    }

    addCarCheck() {
        this.router.go('carCheck', {});
    }

    addGoods() {
        this.router.go('goods', { billing: 'true' });
    }

    addService() {
        this.router.go('service', {});
    }

    addPai() {
        this.router.go('pai', {});
    }

    qianzi() {
        console.log(this.app.form.value);
    }

    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }


    save() {
        console.log(this.app.form.value);
    }

    post() {
        let url = this.app.getMobileUrl('open', {
            open: 'shibida/order/add',
            m: 'runner_open'
        });
        this.http.post(url, this.app.form.value).subscribe(res => {
            this.router.go('orderList');
        });
    }
}

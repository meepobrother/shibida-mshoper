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

    ngOnInit() {
        this.data.carNum = decodeURI(this.router.get('carNum'));
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

    save() {
        console.log(this.app.form.value);
    }

    post() {
        console.log(this.app.form.value);
    }
}

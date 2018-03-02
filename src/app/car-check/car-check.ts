import { Component, OnInit } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
@Component({
    selector: 'car-check',
    templateUrl: './car-check.html',
    styleUrls: ['./car-check.scss']
})

export class CarCheckPage implements OnInit {
    carId: string;
    carNum: string;

    checkItems: any[] = [

    ];
    constructor(
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        this.carNum = decodeURI(this.router.get('carNum'));
        this.carId = decodeURI(this.router.get('carId'));
        const checkItems = JSON.parse(localStorage.getItem('carCheck:' + this.carId));
        if (checkItems) {
            this.checkItems = checkItems;
        } else {
            this.checkItems = this.app.props.checkItems;
        }
    }

    addCarCheck() {

    }

    toggleDetail(item: any) {
        item.open = !item.open;
    }

    finish() {
        // 保存到缓存
        this.app.form.get('check').setValue(this.checkItems);
        localStorage.setItem('carCheck:' + this.carId, JSON.stringify(this.checkItems));
        this.app.back();
    }
}
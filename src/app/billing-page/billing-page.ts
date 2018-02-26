import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'billing-page',
    templateUrl: 'billing-page.html',
    styleUrls: ['./billing-page.scss']
})
export class BillingPage implements OnInit {
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }

    ngOnInit() { 
        
    }

    addOrEditCar() {
        this.router.go('carNum', {});
    }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'pai-page',
    templateUrl: './pai-page.html'
})
export class PaiPage implements OnInit {
    list: any[] = [];

    constructor(
        public location: Location,
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        const url = this.app.getMobileUrl('getshopemployer');

        this.http.get(url).subscribe((res: any) => {
            res.map(item => {
                item.select = this.hasEmployer(item);
            });
            this.list = res;
        });
    }

    hasEmployer(item: any): boolean {
        let employers = this.app.form.get('employers').value;
        employers = employers || [];
        let has = false;
        employers.map(res => {
            if (res.uid === item.uid) {
                has = true;
            }
        });
        return has;
    }

    back() {
        this.location.back();
    }

    add() {
        this.router.go('employerAdd', {});
    }

    home() {
        this.router.go('home', {});
    }

    billing() {
        this.router.go('billing', {});
    }

    save() {
        let employers: any[] = [];
        this.list.map(res => {
            if (res.select) {
                employers.push(res);
            }
        });
        this.app.form.get('employers').setValue(employers);
        this.router.go('billing', {});
    }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'employer-page',
    templateUrl: './employer-page.html',
    styleUrls: ['./employer-page.scss']
})
export class EmployerPage implements OnInit {
    list: any[] = [];
    constructor(
        public location: Location,
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        const url = this.app.getMobileUrl('open',{
            m: 'runner_open',
            open: 'shibida/employer/list'
        });
        this.http.get(url).subscribe((res: any) => {
            this.list = res || [];
        });
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

    getItems(e: any){
        const key = e.target.value;
    }
}
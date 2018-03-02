import { Component, OnInit } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
@Component({
    selector: 'employer-add',
    templateUrl: './employer-add.html',
    styleUrls: ['./employer-add.scss']
})
export class EmployerAddPage implements OnInit {
    list: any[] = [];
    selector: string = '.employer-add-content';
    form: FormGroup;

    constructor(
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            key: '',
            page: 1,
            psize: 20
        });
        this.form.get('key').valueChanges.debounceTime(300).subscribe(res => {
            this.getRefresh();
        });
    }

    ngOnInit() {
        this.getRefresh();
    }

    getNext() {
        let page: number = this.form.get('page').value;
        this.form.get('page').setValue(page + 1);
        this.getPage();
    }

    getRefresh() {
        this.list = [];
        this.form.get('page').setValue(1);
        this.getPage();
    }

    getPage() {
        const url = this.app.getMobileUrl('getemployerlist', this.form.value);
        const page: number = this.form.get('page').value;
        this.http.get(url).subscribe((res: any) => {
            if (page > 1) {
                this.list = this.list.concat(res);
            } else {
                this.list = res;
            }
        });
    }

    save() {
        let list: any[] = [];
        this.list.map(res => {
            if (res.select) {
                list.push(res);
            }
        });
        const url = this.app.getMobileUrl('updateshopemployer');
        this.http.post(url, {list: list}).subscribe(res=>{
            this.app.back();
        });
    }

    onScrollUp() {
        // this.getRefresh();
    }

    onScroll() {
        this.getNext();
    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'goods-group-add',
    templateUrl: './goods-group-add.html'
})
export class GoodsGroupAddPage implements OnInit {
    form: FormGroup;
    list: any[] = [];
    constructor(
        public fb: FormBuilder,
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient,
    ) {
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            displayorder: [''],
            fid: [0]
        });
    }

    ngOnInit() {
        const url = this.app.getMobileUrl('open', {
            open: 'shibida/goodsgroup/top',
            m: 'runner_open'
        });
        this.http.get(url).subscribe((res: any) => {
            this.list = res || [];
        });
    }

    save() {
        let url = this.app.getMobileUrl('open', {
            open: 'shibida/goodsgroup/add',
            m: 'runner_open'
        });
        this.http.post(url, this.form.value).subscribe((res: any) => {
            this.list = res.list;
            this.router.go('goods');
        });
    }
}
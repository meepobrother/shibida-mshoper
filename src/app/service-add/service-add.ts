import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
@Component({
    selector: 'service-add',
    templateUrl: './service-add.html'
})
export class ServiceAddPage implements OnInit {
    form: FormGroup;
    constructor(
        public fb: FormBuilder,
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient,
    ) {
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            count: [''],
            price: [''],
            group_id: ['']
        });
    }

    ngOnInit() {
        this.form.get('group_id').setValue(this.router.get('groupId'));
    }

    save() {
        let url = this.app.getMobileUrl('open', {
            open: 'shibida/service/add',
            m: 'runner_open'
        });
        this.http.post(url, this.form.value).subscribe(res => {
            this.router.go('service');
        });
    }

    back() {
        this.router.go('billing');
    }
}

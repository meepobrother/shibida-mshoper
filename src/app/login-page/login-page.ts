import { Component, OnInit, isDevMode } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';
import { AppService } from '../shared/app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.html',
    styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnInit {
    form: FormGroup;
    constructor(
        public app: AppService,
        public fb: FormBuilder,
        public http: HttpClient
    ) {
        this.form = this.fb.group({
            mobile: '',
            password: ''
        });
    }

    ngOnInit() { }

    login() {
        if (isDevMode()) {
            this.app.loginSuccess({ id: 1 });
            return;
        }
        const url = this.app.getMobileUrl('doLogin');
        this.http.post(url, this.form.value).subscribe((res: any) => {
            if (res.status === 0) {
                // 登录成功
                this.app.loginSuccess(res.data);
            } else {
                // 登录失败
                this.app.tip(res.message);
            }
        });
    }
}
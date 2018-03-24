import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7RouterService, We7UtilService } from 'meepo-we7-router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class AppService {
    props: any = {
        home: {
            swiper: {}
        }
    };
    version: string = '1.0.4';
    form: FormGroup;
    constructor(
        public http: HttpClient,
        public router: We7RouterService,
        public location: Location,
        public fb: FormBuilder,
        public util: We7UtilService
    ) {
        let url = '../addons/shibida_mshoper/template/mobile/assets/app.json?t=' + new Date().getTime();
        if (isDevMode()) {
            url = './assets/app.json?t=' + new Date().getTime();
        }
        this.http.get(url).subscribe(res => {
            this.props = res;
        });
        this.form = this.fb.group({
            car_num: '',
            car_id: '',
            check: [],
            goods: [],
            needXiche: '0',
            services: [],
            employers: [],
            message: [''],
            tid: [this.guid()],
            price: [0]
        });
        let values = localStorage.getItem('shibida:form');
        if (values) {
            let items = JSON.parse(values);
            for (let key in items) {
                this.form.get(key).setValue(items[key]);
            }
        }
        this.form.valueChanges.subscribe(res => {
            localStorage.setItem('shibida:form', JSON.stringify(res));
        });
    }

    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    initForm() {

    }

    refreshForm() {

    }

    back() {
        this.location.back();
    }

    getMobileUrl(_do: string, params?: any) {
        console.log(params);
        return this.util.getMobileUrl(_do, params);
    }

    getWebUrl(_do: string, params?: any) {
        return this.util.getWebUrl(_do, params);
        // return `${location.protocol}//${location.host}/web/index.php${url}`
    }

    toRegister() {
        this.router.go('register', {});
    }

    toForget() {
        this.router.go('forget', {});
    }

    toLogin() {
        this.router.go('login', {});
    }

    loginSuccess(item: any) {
        const _do = localStorage.getItem('login.success');
        sessionStorage.setItem('uid', item.id);
        if (_do) {
            this.router.go(_do, { shopId: item.id });
        } else {
            this.router.go('index', { shopId: item.id });
        }

    }

    tip(msg: string) {
        alert(msg);
    }
}
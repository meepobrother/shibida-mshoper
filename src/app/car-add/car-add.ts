import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { We7RouterService } from 'meepo-we7-router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'car-add',
    templateUrl: 'car-add.html',
    styleUrls: ['./car-add.scss']
})
export class CarAddPage implements OnInit {
    id: string = '0';
    form: FormGroup;
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService,
        public location: Location,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            carNum: '',
            jarNum: '',
            licheng: '',
            realname: '',
            mobile: ''
        });
    }

    ngOnInit() {
        this.form.get('carNum').setValue(decodeURI(this.router.get('carNum')));
    }

    cancel() {
        this.location.back();
    }

    private postToSave() {
        const url = this.app.getMobileUrl('postCarAdd', {});
        return this.http.post(url, this.form.value)
    }

    save() {
        if (isDevMode()) {
            this.router.go('home', { carId: '1' });
            return;
        }
        this.postToSave().subscribe((res: any) => {
            if (res.status === 0) {
                const { data } = res;
                localStorage.setItem('carfiles:' + data.id, JSON.stringify(data));
                this.router.go('home', { carId: res.id });
            } else {
                console.log(res);
            }
        });
    }

    add() {
        if (isDevMode()) {
            this.router.go('billing', { carId: '1' });
            return;
        }
        this.postToSave().subscribe((res: any) => {
            if (res.status === 0) {
                const { data } = res;
                localStorage.setItem('carfiles:' + data.id, JSON.stringify(data));
                this.router.go('billing', { carId: res.id });
            } else {
                console.log(res);
            }
        });
    }
}

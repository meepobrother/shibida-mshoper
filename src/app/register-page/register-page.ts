import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'register-page',
    templateUrl: 'register-page.html',
    styleUrls: ['./register-page.scss']
})
export class RegisterPage implements OnInit {
    form: FormGroup;
    constructor(
        public app: AppService,
        public http: HttpClient,
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            title: '',
            mobile: '',
            password: '',
            rePassword: '',
            cid: '',
            code: ''
        });
    }

    ngOnInit() { 
        
    }

    register(){
        const url = this.app.getMobileUrl('doRegister');
        this.http.post(url, this.form.value).subscribe(res => {
            console.log(res);
        });
    }
}
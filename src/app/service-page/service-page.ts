import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'service-page',
    templateUrl: 'service-page.html'
})
export class ServicePage implements OnInit {
    constructor(
        public http: HttpClient,
        public app: AppService
    ) { }
    ngOnInit() { }
}

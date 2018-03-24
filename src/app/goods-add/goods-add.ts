import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { ModalController } from 'we7-ionic';
import { GoodsGroupSelectComponent } from '../goods-group-select/goods-group-select.component';
@Component({
    selector: 'goods-add',
    templateUrl: './goods-add.html'
})
export class GoodsAddPage implements OnInit {
    form: FormGroup;
    selectOptions: any;
    showChildren: boolean = false;
    constructor(
        public fb: FormBuilder,
        public app: AppService,
        public router: We7RouterService,
        public http: HttpClient,
        public modalController: ModalController
    ) {
        this.form = this.fb.group({
            fid: [0],
            group_id: [0],
            title: [''],
            desc: [''],
            count: [''],
            price: ['']
        });
    }
    top: any[] = [];
    second: any[] = [];
    ngOnInit() {
        this.form.get('fid').valueChanges.subscribe(res => {
            this.top.map(top => {
                if ('' + top.id === '' + res) {
                    this.second = top.items;
                }
            })
        });
        let url = this.app.getMobileUrl('open', {
            open: 'shibida/goodsgroup/top',
            m: 'runner_open'
        });
        this.http.get(url).subscribe((res: any) => {
            this.top = res;
            this.form.get('group_id').setValue(this.router.get('groupId'));
            this.form.get('fid').setValue(this.router.get('fid'));
        });
    }

    save() {
        let url = this.app.getMobileUrl('open', {
            open: 'shibida/goods/add',
            m: 'runner_open'
        });
        this.http.post(url, this.form.value).subscribe(res => {
            this.router.go('goods');
        });
    }

    async pickerGroup() {
        const modal = await this.modalController.create({
            component: GoodsGroupSelectComponent
        });
        return modal.present();
    }

    changeCategory(e: any) {
        this.showChildren = true;
        let id = e.detail.value;
        if (id) {
            this.top.map(res => {
                if (res.id === id) {
                    this.second = res.items;
                }
            })
        }
    }

    changeChildCategory(e: any) {

    }
}

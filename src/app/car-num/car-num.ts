import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'car-num',
    templateUrl: 'car-num.html',
    styleUrls: ['./car-num.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CarNumPage implements OnInit {
    proviences: any[] = [
        [{ title: '京' }, { title: '津' }, { title: '渝' }, { title: '沪' }, { title: '冀' }, { title: '晋' }, { title: '辽' }, { title: '吉' }, { title: '黑' }, { title: '苏' }],
        [{ title: '浙' }, { title: '皖' }, { title: '闽' }, { title: '赣' }, { title: '鲁' }, { title: '豫' }, { title: '鄂' }, { title: '湘' }, { title: '粤' }, { title: '琼' }],
        [{ title: '川' }, { title: '贵' }, { title: '云' }, { title: '陕' }, { title: '甘' }, { title: '青' }, { title: '蒙' }, { title: '桂' }, { title: '宁' }, { title: '新' }],
        [{ title: 'ABC', class: 'changeContentBtn other', type: 'keyboard' }, { title: '藏' }, { title: '使' }, { title: '领' }, { title: '警' }, { title: '学' }, { title: '港' }, { title: '<i class="backDeleteImg"></i>', class: 'deleteBtn other', type: 'delete' }]
    ];

    list: any[] = [
        [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }, { title: '5' }, { title: '6' }, { title: '7' }, { title: '8' }, { title: '9' }, { title: '0' }],
        [{ title: 'Q' }, { title: 'W' }, { title: 'E' }, { title: 'R' }, { title: 'T' }, { title: 'Y' }, { title: 'U' }, { title: 'I' }, { title: 'O' }, { title: 'P' }],
        [{ title: 'A' }, { title: 'S' }, { title: 'D' }, { title: 'F' }, { title: 'G' }, { title: 'H' }, { title: 'J' }, { title: 'K' }, { title: 'L' }],
        [{ title: '返回', class: 'changeContentBtn other', type: 'back' }, { title: 'Z' }, { title: 'X' }, { title: 'C' }, { title: 'V' }, { title: 'B' }, { title: 'N' }, { title: 'M' }, { title: '<i class="backDeleteImg"></i>', class: 'deleteBtn other', type: 'delete' }]
    ]

    post: any[] = [{ title: '省', active: true }, { title: '', active: false }, { title: '', active: false }, { title: '', active: false }, { title: '', active: false }, { title: '', active: false }, { title: '', active: false },];

    xinnengyuan: boolean = false;
    keyboard: boolean = false;
    index: number = 0;
    constructor(
        public render: Renderer2,
        public router: We7RouterService,
        public http: HttpClient,
        public app: AppService
    ) { }

    ngOnInit() {
        let carNum = decodeURI(this.router.get('carNum') || '');
        if (!carNum) {
            carNum = '';
        }
        if (carNum.length > this.post.length) {
            this.toggleKeyboard();
        }
        for (let i = 0; i < carNum.length; i++) {
            this.post[i].title = carNum[i];
        }
        if (carNum.length > 0) {
            this.setActive(this.post[carNum.length - 1]);
        } else {
            this.setActive(this.post[0]);
        }
    }

    setActive(item: any) {
        this.post.map((res, index) => {
            if (item === res) {
                this.index = index;
            }
            res.active = false;
        });
        item.active = true;
    }

    onProvience(it: any) {
        if (it.type === 'keyboard') {
            this.toggleKeyboard();
        } else if (it.type === 'delete') {
            this.post[this.index].title = '';
            this.post[this.index].active = false;
            this.index--;
            if (this.index < 0) {
                this.index = 0;
            }
            this.post[this.index].active = true;
        } else {
            this.post[this.index].title = it.title;
            this.post[this.index].active = false;
            this.index++;
            if (this.index < this.post.length) {
                this.post[this.index].active = true;
            }
            this.toggleKeyboard();
        }
    }

    onTextBox(it: any) {
        if (it.type === 'back') {
            this.toggleKeyboard();
        } else if (it.type === 'delete') {
            if (this.index < this.post.length) {
                this.post[this.index].active = false;
                this.post[this.index].title = '';
            }
            this.index--;
            if (this.index < 1) {
                this.index = 0;
                this.post[this.index].title = '省';
                this.toggleKeyboard();
            } else {
                this.post[this.index].title = '';
            }
            this.post[this.index].active = true;
        } else {
            if (this.index < this.post.length) {
                this.post[this.index].title = it.title;
                this.post[this.index].active = false;
                this.index++;
                if (this.index < this.post.length) {
                    this.post[this.index].active = true;
                }
            }
        }
    }

    toggleKeyboard() {
        this.keyboard = !this.keyboard;
    }

    isXinNengYuan() {
        this.xinnengyuan = true;
        this.post.push({
            title: '',
            active: false
        });
        if (this.index === this.post.length - 1) {
            this.post[this.post.length - 1].active = true;
        }
    }

    doPost() {
        let isEmpty = false;
        let carNum = '';
        this.post.map(res => {
            if (res.title.length === 0) {
                isEmpty = true;
            }
            carNum += res.title;
        });
        if (isEmpty) {
            alert('请检查车牌号格式');
        } else {
            // 检查车牌号汽车是否存在
            this.http.get(this.app.getUrl('carCheck', {
                carNum: carNum
            })).subscribe((res: any) => {
                if (res.status === 0) {
                    const item = res.data;
                    localStorage.setItem('carfiles:' + item.id, JSON.stringify(item));
                    this.app.form.get('car').setValue(item);
                    this.router.go('billing', { carId: item.id });
                } else {
                    this.router.go('carAdd', { carNum: carNum });
                }
            });
        }
    }
}

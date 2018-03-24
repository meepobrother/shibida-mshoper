import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'footer-container',
    template: `
        <div class="footer-item" routerLinkActive="active" [routerLink]="'/app/entry/site/shibida_mshoper/'+item.do" *ngFor="let item of props">
            <i [class]="item.default.icon"></i>
            <span>{{item.title}}</span>
        </div>
    `,
    styleUrls: ['./footer-container.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FooterContainer implements OnInit {
    @HostBinding('class.footer-container') _container: boolean = true;
    @Input() props: any[] = [];
    constructor() { }
    ngOnInit() { }
}
import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'footer',
    templateUrl: 'footer.html',
    styleUrls: ['./footer.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
    @Input() props: any[] = [];
    @Output() onItem: EventEmitter<any> = new EventEmitter();
    do: string = '';
    constructor(
        public router: We7RouterService,
        private route: ActivatedRoute
    ) { }
    ngOnInit() { }
}

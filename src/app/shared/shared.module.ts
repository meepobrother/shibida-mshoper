import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { NumInput } from './num-input/num-input';

import { We7ImgDirective } from './we7-img/we7-img';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppService } from './app.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
import { We7IonicModule } from 'we7-ionic';
@NgModule({
    imports: [
        SwiperModule,
        InfiniteScrollModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        We7IonicModule.forRoot()
    ],
    exports: [
        SwiperModule,
        InfiniteScrollModule,
        FooterComponent,
        We7ImgDirective,
        ReactiveFormsModule,
        FormsModule,
        NumInput,
        We7IonicModule
    ],
    declarations: [
        FooterComponent,
        We7ImgDirective,
        NumInput
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
        AppService
    ]
})
export class SharedModule { }

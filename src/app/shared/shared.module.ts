import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { We7ImgDirective } from './we7-img/we7-img';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppService } from './app.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    imports: [
        SwiperModule,
        InfiniteScrollModule,
        ReactiveFormsModule
    ],
    exports: [
        SwiperModule,
        InfiniteScrollModule,
        FooterComponent,
        We7ImgDirective,
        ReactiveFormsModule
    ],
    declarations: [
        FooterComponent,
        We7ImgDirective
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

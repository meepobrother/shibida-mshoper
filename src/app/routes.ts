import { HomePage } from './home-page/home-page';
import { BillingPage } from './billing-page/billing-page';
import { CarAddPage } from './car-add/car-add';
import { CarNumPage } from './car-num/car-num';

import { ServicePage } from './service-page/service-page';
import { MemberPage } from './member-page/member-page';
import { OrderListPage } from './order-list/order-list';
import { CarfilesListPage } from './carfiles-list/carfiles-list';


// 登录注册及修改密码
import { LoginPage } from './login-page/login-page';
import { ForgetPage } from './forget-page/forget-page';
import { RegisterPage } from './register-page/register-page';

// 管理
import { YejiPage } from './yeji-page/yeji-page';
import { TotalPage } from './total-page/total-page';
import { MessagePage } from './message-page/message-page';
import { CoachPage } from './coach-page/coach-page';
import { BonusPage } from './bonus-page/bonus-page';
import { AnsycPage } from './ansyc-page/ansyc-page';
import { MoneyPage } from './money-page/money-page';

export const routes = [{
    path: 'login',
    component: LoginPage
}, {
    path: 'forget',
    component: ForgetPage
}, {
    path: 'register',
    component: RegisterPage
}, {
    path: 'home',
    component: HomePage
}, {
    path: 'billing',
    component: BillingPage
}, {
    path: 'carAdd',
    component: CarAddPage
}, {
    path: 'carNum',
    component: CarNumPage
}, {
    path: 'service',
    component: ServicePage
}, {
    path: 'member',
    component: MemberPage
}, {
    path: 'orderList',
    component: OrderListPage
}, {
    path: 'carfilesList',
    component: CarfilesListPage
}, {
    path: 'yeji',
    component: YejiPage
}, {
    path: 'total',
    component: TotalPage
}, {
    path: 'message',
    component: MessagePage
}, {
    path: 'coach',
    component: CoachPage
}, {
    path: 'bonus',
    component: BonusPage
}, {
    path: 'ansyc',
    component: AnsycPage
}, {
    path: 'money',
    component: MoneyPage
}];

export const components = [
    LoginPage,
    ForgetPage,
    RegisterPage,
    HomePage,
    BillingPage,
    ServicePage,
    MemberPage,
    CarAddPage,
    CarNumPage,
    OrderListPage,
    CarfilesListPage,
    YejiPage,
    TotalPage,
    MessagePage,
    CoachPage,
    BonusPage,
    MoneyPage,
    AnsycPage
];

import { HomePage } from './home-page/home-page';
import { BillingPage } from './billing-page/billing-page';
import { CarAddPage } from './car-add/car-add';
import { CarNumPage } from './car-num/car-num';
import { CarCheckPage } from './car-check/car-check';


import { ServicePage } from './service-page/service-page';
import { MemberPage } from './member-page/member-page';
import { OrderListPage } from './order-list/order-list';
import { CarfilesListPage } from './carfiles-list/carfiles-list';


// 登录注册及修改密码
import { LoginPage } from './login-page/login-page';
import { ForgetPage } from './forget-page/forget-page';
import { RegisterPage } from './register-page/register-page';
import { PaiPage } from './pai-page/pai-page';


// 管理
import { YejiPage } from './yeji-page/yeji-page';
import { TotalPage } from './total-page/total-page';
import { MessagePage } from './message-page/message-page';
import { CoachPage } from './coach-page/coach-page';
import { BonusPage } from './bonus-page/bonus-page';
import { AnsycPage } from './ansyc-page/ansyc-page';
import { MoneyPage } from './money-page/money-page';
import { GoodsPage } from './goods-page/goods-page';
import { EmployerPage } from './employer-page/employer-page';
import { EmployerAddPage } from './employer-add/employer-add';

import { GoodsGroupAddPage } from './goods-group-add/goods-group-add';

export const routes = [{
    path: 'login',
    component: LoginPage,
    login: false
}, {
    path: 'forget',
    component: ForgetPage,
    login: false
}, {
    path: 'register',
    component: RegisterPage,
    login: false
}, {
    path: 'home',
    component: HomePage,
    login: true
}, {
    path: 'index',
    component: HomePage,
    login: true
}, {
    path: 'billing',
    component: BillingPage,
    login: true
}, {
    path: 'carAdd',
    component: CarAddPage,
    login: true
}, {
    path: 'carNum',
    component: CarNumPage,
    login: true
}, {
    path: 'carCheck',
    component: CarCheckPage,
    login: true
}, {
    path: 'service',
    component: ServicePage,
    login: true
}, {
    path: 'member',
    component: MemberPage,
    login: true
}, {
    path: 'orderList',
    component: OrderListPage,
    login: true
}, {
    path: 'carfilesList',
    component: CarfilesListPage,
    login: true
}, {
    path: 'yeji',
    component: YejiPage,
    login: true
}, {
    path: 'total',
    component: TotalPage,
    login: true
}, {
    path: 'message',
    component: MessagePage,
    login: true
}, {
    path: 'coach',
    component: CoachPage,
    login: true
}, {
    path: 'bonus',
    component: BonusPage,
    login: true
}, {
    path: 'ansyc',
    component: AnsycPage,
    login: true
}, {
    path: 'money',
    component: MoneyPage,
    login: true
}, {
    path: 'goods',
    component: GoodsPage,
    login: true
}, {
    path: 'pai',
    component: PaiPage,
    login: true
}, {
    path: 'employer',
    component: EmployerPage,
    login: true
}, {
    path: 'employerAdd',
    component: EmployerAddPage,
    login: true
},{
    path: 'goodsGroupAdd',
    component: GoodsGroupAddPage,
    login: true
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
    AnsycPage,
    CarCheckPage,
    GoodsPage,
    PaiPage,
    EmployerPage,
    EmployerAddPage,
    GoodsGroupAddPage
];

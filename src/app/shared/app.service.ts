import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';
@Injectable()
export class AppService {
    props: any;
    version: string = '1.0.4';
    constructor(
        public http: HttpClient,
        public router: We7RouterService
    ) {
        let url = '../addons/shibida_mshoper/template/mobile/assets/app.json?t=' + new Date().getTime();
        if (isDevMode()) {
            url = './assets/app.json?t=' + new Date().getTime();
        }
        this.http.get(url).subscribe(res => {
            this.props = res;
        });
    }

    getUrl(_do: string, params?: any) {
        let url = '';
        if (isDevMode()) {
            url = `./assets/${_do}.json?t=` + new Date().getTime();
        } else {
            url = this.router.puts({
                do: _do,
                ...params
            });
        }
        return url;
    }

    getMobileUrl(_do: string, params?: any) {
        let url = this.getUrl(_do, params);
        if (isDevMode()) {
            return url;
        }
        return `${location.protocol}//${location.host}/app/index.php${url}`
    }

    getWebUrl(_do: string, params?: any) {
        let url = this.getUrl(_do, params);
        if (isDevMode()) {
            return url;
        }
        return `${location.protocol}//${location.host}/web/index.php${url}`
    }

    toRegister() {
        this.router.go('register', {});
    }

    toForget() {
        this.router.go('forget', {});
    }

    toLogin() {
        this.router.go('login', {});
    }
}
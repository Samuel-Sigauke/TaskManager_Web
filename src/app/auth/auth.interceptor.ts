import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token = sessionStorage.getItem('token')

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        req = req.clone({
            headers: req.headers.set('Authorization','Basic ' + this.token)
        });

        return next.handle(req);
    }

}
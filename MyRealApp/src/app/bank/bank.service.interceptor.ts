import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class BankServiceInterceptor implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log(req);
        // // Overrite headers object ----
        // const headers = req.headers.append('', '');
        // const copiedReq = req.clone({headers : headers});
        // next.handle(copiedReq)
        return next.handle(req);
    }
}
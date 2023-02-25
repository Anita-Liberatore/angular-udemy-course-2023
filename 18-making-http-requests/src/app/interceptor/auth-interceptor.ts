import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('request is on it way');
    const modifiedReq = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
    });
    return next.handle(modifiedReq);
  }
}

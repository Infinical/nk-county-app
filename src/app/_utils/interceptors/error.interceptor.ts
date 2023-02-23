import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SpinnerService } from '../../_services/spinner.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  //   disabledRoutes: string[] = [
  //     environment.apiUrl + urlList.accounts.getUserAccounts,
  //     environment.apiUrl + urlList.dataLookUp.getBanks,
  //     environment.apiUrl + urlList.dataLookUp.getSubsidiaries,
  //   ];
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.setLoading(true, request.url);
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.setLoading(false, request.url);
          // if (request.method === 'POST' && event?.body?.isSuccessful) {
          //   // this.notifyError({
          //   //   error: false,
          //   //   errorStatus: event.statusText,
          //   //   message: event?.body?.Message || event?.body?.message,
          //   // });
          // }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        this.spinnerService.setLoading(false, request.url);
        // this.toast.showToast('Testing');
        const errorMessage = {
          error: false,
          errorStatus: '',
          message: '',
          details: '',
        };
        if (error.error instanceof ErrorEvent) {
          errorMessage.error = true;
          errorMessage.message = error.error.error;
          //   this.notifyError(errorMessage);
        } else {
          console.log(error);
          errorMessage.error = true;
          errorMessage.errorStatus = `${error?.message}`;
          errorMessage.message = error?.error?.error;
          errorMessage.details = error?.error;
          //   this.notifyError(errorMessage);
        }
        // TODO:: Add loggin service here
        return throwError(errorMessage);
      })
    );
  }
}

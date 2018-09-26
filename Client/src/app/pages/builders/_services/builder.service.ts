import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Builder } from '../builder';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  private readonly apiUrl = environment.apiUrl;
  private buildersUrl = this.apiUrl + '/builders';
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('BuildersService')
   }

  /** GET builders from builders endpoint */
  getBuilders(): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.buildersUrl)
      .pipe(
      catchError(this.handleError('getBuilders', []))
      );
  }

  /** GET builder detail from builder-detail endpoint */
  getBuilderDetail(id: number): Observable<Builder[]> {
    return this.http
      .get<Builder[]>(this.buildersUrl + `${id}`)
      .pipe(catchError(this.handleError('getBuilderDetail', [])))
  }

  /** POST builder to builders endpoint */
  addBuilder(builder: Builder): Observable<Builder> {
    return this.http
      .post<Builder>(this.buildersUrl, builder)
      .pipe(catchError(this.handleError('addBuilder', builder)))
  }

  /** PUT builder to builders endpoint */
  updateBuilder(builder: Builder, id: number): Observable<Builder> {
    return this.http
      .put<Builder>(this.buildersUrl + `/${id}`, builder)
      .pipe(catchError(this.handleError('updateBuilder', builder)))
  }

  /** DELETE builder from builder endpoint */
  deleteBuilder(id: number): Observable<Builder[]> {
    return this.http
      .delete<Builder[]>(this.buildersUrl + `/${id}`)
      .pipe(catchError(this.handleError('deleteBuilder', [])))
  }
}

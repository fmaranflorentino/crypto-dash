import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpMethods } from '../../helpers/http-methods';


@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpMethods {
  private basePath = ``;

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public get<T>(url: string, option?: object): Observable<T> {

    const request = this.http
      .get<T>(`${this.basePath}${url}`, option);

    return request;

  }

  public post<T>(url: string, body: object, options?: object): Observable<T> {

    const request = this.http
      .post<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public put<T>(url: string, body: object, options?: object): Observable<T> {

    const request = this.http
      .put<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public patch<T>(url: string, body: object, options?: object): Observable<T> {

    const request = this.http
      .patch<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public delete<T>(url: string, options?: object): Observable<T> {

    const request = this.http
      .delete<T>(`${this.basePath}${url}`, options);

    return request;

  }
}

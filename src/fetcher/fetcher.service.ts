import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';

import { map, Observable } from 'rxjs';

@Injectable()
export class FetcherService {
  constructor(private readonly httpService: HttpService) {}

  private request<R, S = unknown>(
    config: AxiosRequestConfig<S>,
  ): Observable<R> {
    return this.httpService.request<R>(config).pipe(map((res) => res.data));
  }

  public get<T>(url: string): Observable<T> {
    return this.request<T>({ url, method: 'GET' });
  }

  public post<T, U>(url: string, data: U): Observable<T> {
    return this.request<T, U>({ url, method: 'POST', data });
  }

  public put<T, U>(url: string, data: U): Observable<T> {
    return this.request<T, U>({ url, method: 'PUT', data });
  }

  public patch<T, U>(url: string, data: U): Observable<T> {
    return this.request<T, U>({ url, method: 'PATCH', data });
  }

  public delete<T = Record<string, unknown>>(url: string): Observable<T> {
    return this.request<T>({ url, method: 'DELETE' });
  }
}

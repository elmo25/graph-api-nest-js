import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { map, Observable } from 'rxjs';

@Injectable()
export class FetcherService {
  constructor(private readonly httpService: HttpService) {}

  public get<T>(url: string): Observable<T> {
    return this.httpService.get<T>(url).pipe(map((res) => res.data));
  }

  public post<T, U>(url: string, data: U): Observable<T> {
    return this.httpService.post<T>(url, data).pipe(map((res) => res.data));
  }

  public put<T, U>(url: string, data: U): Observable<T> {
    return this.httpService.put<T>(url, data).pipe(map((res) => res.data));
  }

  public patch<T, U>(url: string, data: U): Observable<T> {
    return this.httpService.patch<T>(url, data).pipe(map((res) => res.data));
  }

  public delete<T = Record<string, unknown>>(url: string): Observable<T> {
    return this.httpService.delete<T>(url).pipe(map((res) => res.data));
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { AxiosRequestConfig } from 'axios';

import { HTTP_METHODS } from 'src/fetcher/constants';

@Injectable()
export class FetcherService {
  constructor(private readonly httpService: HttpService) {}

  public async get<T>(url: string) {
    return this.request<T>({ url, method: HTTP_METHODS.GET });
  }

  public async post<T, U>(url: string, data: U) {
    return this.request<T, U>({ url, method: HTTP_METHODS.POST, data });
  }

  public async put<T, U>(url: string, data: U) {
    return this.request<T, U>({ url, method: HTTP_METHODS.PUT, data });
  }

  public async patch<T, U>(url: string, data: U) {
    return this.request<T, U>({ url, method: HTTP_METHODS.PATCH, data });
  }

  public async delete<T = Record<string, unknown>>(url: string) {
    return this.request<T>({ url, method: HTTP_METHODS.DELETE });
  }

  private async request<R, S = unknown>(
    config: AxiosRequestConfig<S>,
  ): Promise<R> {
    const result = await this.httpService.axiosRef.request<R>(config);
    return result.data;
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { Observable, map } from 'rxjs';

import { ConfigService } from 'src/config/config.service';
import { UserModel } from 'src/users/user.model';

@Injectable()
export class UsersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public findAll(): Observable<UserModel[]> {
    return this.httpService
      .get<UserModel[]>(this.configService.users)
      .pipe(map((res) => res.data));
  }

  public findById(id: number): Observable<UserModel> {
    return this.httpService
      .get<UserModel>(this.configService.getUserById(id))
      .pipe(map((res) => res.data));
  }
}

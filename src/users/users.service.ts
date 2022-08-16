import { Injectable } from '@nestjs/common';

import { ConfigService } from 'src/config/config.service';
import { FetcherService } from 'src/fetcher/fetcher.service';
import { UserModel } from 'src/users/user.model';

@Injectable()
export class UsersService {
  constructor(
    private readonly fetcherService: FetcherService,
    private readonly configService: ConfigService,
  ) {}

  public findAll() {
    return this.fetcherService.get<UserModel[]>(this.configService.users);
  }

  public findById(id: number) {
    return this.fetcherService.get<UserModel>(
      this.configService.getUserById(id),
    );
  }
}

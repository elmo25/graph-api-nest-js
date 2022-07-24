import { Injectable } from '@nestjs/common';

import { AlbumModel } from 'src/albums/album-model';
import { ConfigService } from 'src/config/config.service';
import { FetcherService } from 'src/fetcher/fetcher.service';

@Injectable()
export class AlbumsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly fetcherService: FetcherService,
  ) {}

  public async findAll() {
    return this.fetcherService.get<AlbumModel[]>(this.configService.albums);
  }

  public async findById(id: number) {
    return this.fetcherService.get<AlbumModel>(
      this.configService.getAlbumsById(id),
    );
  }

  public async findByUserId(userId: number) {
    return this.fetcherService.get<AlbumModel[]>(
      this.configService.getAlbumsByUserId(userId),
    );
  }
}

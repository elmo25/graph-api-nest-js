import { Injectable } from '@nestjs/common';

import { ConfigService } from 'src/config/config.service';
import { FetcherService } from 'src/fetcher/fetcher.service';

import { PhotoModel } from 'src/photos/photo-model';

@Injectable()
export class PhotosService {
  constructor(
    private readonly configService: ConfigService,
    private readonly fetcherService: FetcherService,
  ) {}

  public async findAll() {
    return this.fetcherService.get<PhotoModel[]>(this.configService.photos);
  }

  public async findById(id: number) {
    return this.fetcherService.get<PhotoModel>(
      this.configService.getPhotoById(id),
    );
  }

  public async findByAlbumId(albumId: number){
    return this.fetcherService.get<PhotoModel[]>(
      this.configService.getPhotosByAlbumId(albumId),
    );
  }
}

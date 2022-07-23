import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { ConfigService } from 'src/config/config.service';

import { PhotoModel } from 'src/photos/photo-model';

@Injectable()
export class PhotosService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  public findAll(): Observable<PhotoModel[]> {
    return this.httpService
      .get<PhotoModel[]>(this.configService.photos)
      .pipe(map((res) => res.data));
  }

  public findById(id: number): Observable<PhotoModel> {
    return this.httpService
      .get<PhotoModel>(this.configService.getPhotoById(id))
      .pipe(map((res) => res.data));
  }

  public findByAlbumId(albumId: number): Observable<PhotoModel[]> {
    return this.httpService
      .get<PhotoModel[]>(this.configService.getPhotosByAlbumId(albumId))
      .pipe(map((res) => res.data));
  }
}

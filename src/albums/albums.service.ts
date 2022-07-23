import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { AlbumModel } from 'src/albums/album-model';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class AlbumsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  public findAll(): Observable<AlbumModel[]> {
    return this.httpService
      .get<AlbumModel[]>(this.configService.albums)
      .pipe(map((res) => res.data));
  }

  public findById(id: number): Observable<AlbumModel> {
    return this.httpService
      .get<AlbumModel>(this.configService.getAlbumsById(id))
      .pipe(map((res) => res.data));
  }

  public findByUserId(userId: number): Observable<AlbumModel[]> {
    return this.httpService
      .get<AlbumModel[]>(this.configService.getAlbumsByUserId(userId))
      .pipe(map((res) => res.data));
  }
}

import { Module } from '@nestjs/common';

import { FetcherModule } from 'src/fetcher/fetcher.module';

import { ConfigService } from 'src/config/config.service';

import { AlbumsService } from 'src/albums/albums.service';
import { AlbumsResolver } from 'src/albums/albums.resolver';

import { PhotosService } from 'src/photos/photos.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [FetcherModule],
  providers: [
    AlbumsService,
    AlbumsResolver,
    ConfigService,
    PhotosService,
    UsersService,
  ],
})
export class AlbumsModule {}

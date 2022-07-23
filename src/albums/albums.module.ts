import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ConfigService } from 'src/config/config.service';

import { AlbumsService } from 'src/albums/albums.service';
import { AlbumsResolver } from 'src/albums/albums.resolver';

import { PhotosService } from 'src/photos/photos.service';

@Module({
  imports: [HttpModule],
  providers: [AlbumsService, AlbumsResolver, ConfigService, PhotosService],
})
export class AlbumsModule {}

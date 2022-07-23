import { Module } from '@nestjs/common';

import { FetcherModule } from 'src/fetcher/fetcher.module';

import { ConfigService } from 'src/config/config.service';

import { PhotosService } from './photos.service';
import { PhotosResolver } from './photos.resolver';

@Module({
  imports: [FetcherModule],
  providers: [PhotosService, PhotosResolver, ConfigService],
})
export class PhotosModule {}

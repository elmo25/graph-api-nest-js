import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ConfigService } from 'src/config/config.service';

import { PhotosService } from './photos.service';
import { PhotosResolver } from './photos.resolver';

@Module({
  imports: [HttpModule],
  providers: [PhotosService, PhotosResolver, ConfigService],
})
export class PhotosModule {}

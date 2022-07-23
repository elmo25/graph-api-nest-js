import { Module } from '@nestjs/common';

import { FetcherModule } from 'src/fetcher/fetcher.module';

import { CommentsService } from 'src/comments/comments.service';
import { CommentsResolver } from 'src/comments/comments.resolver';

import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [FetcherModule],
  providers: [CommentsService, CommentsResolver, ConfigService],
})
export class CommentsModule {}

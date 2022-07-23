import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CommentsService } from 'src/comments/comments.service';
import { CommentsResolver } from 'src/comments/comments.resolver';

import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [HttpModule],
  providers: [CommentsService, CommentsResolver, ConfigService],
})
export class CommentsModule {}

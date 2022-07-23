import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CommentsService } from 'src/comments/comments.service';

import { ConfigService } from 'src/config/config.service';

import { UsersService } from 'src/users/users.service';

import { PostsService } from 'src/posts/posts.service';
import { PostsResolver } from 'src/posts/posts.resolver';

@Module({
  imports: [HttpModule],
  providers: [
    PostsService,
    PostsResolver,
    UsersService,
    CommentsService,
    ConfigService,
  ],
})
export class PostsModule {}

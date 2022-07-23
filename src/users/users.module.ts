import { Module } from '@nestjs/common';

import { AlbumsService } from 'src/albums/albums.service';

import { ConfigService } from 'src/config/config.service';
import { FetcherModule } from 'src/fetcher/fetcher.module';

import { PostsService } from 'src/posts/posts.service';

import { UsersService } from 'src/users/users.service';
import { UsersResolver } from 'src/users/users.resolver';

@Module({
  imports: [FetcherModule],
  providers: [
    UsersService,
    UsersResolver,
    PostsService,
    ConfigService,
    AlbumsService,
  ],
})
export class UsersModule {}

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AlbumsService } from 'src/albums/albums.service';

import { ConfigService } from 'src/config/config.service';

import { PostsService } from 'src/posts/posts.service';

import { UsersService } from 'src/users/users.service';
import { UsersResolver } from 'src/users/users.resolver';

@Module({
  imports: [HttpModule],
  providers: [
    UsersService,
    UsersResolver,
    PostsService,
    ConfigService,
    AlbumsService,
  ],
})
export class UsersModule {}

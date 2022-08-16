import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from 'src/config/config.module';

import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';
import { CommentsModule } from 'src/comments/comments.module';
import { AlbumsModule } from 'src/albums/albums.module';
import { PhotosModule } from 'src/photos/photos.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
    AlbumsModule,
    ConfigModule,
    PhotosModule,
  ],
})
export class AppModule {}

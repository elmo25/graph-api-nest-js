import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AlbumModel } from 'src/albums/album-model';
import { AlbumsService } from 'src/albums/albums.service';

import { PostModel } from 'src/posts/post-model';
import { UserModel } from 'src/users/user.model';

import { PostsService } from 'src/posts/posts.service';
import { UsersService } from 'src/users/users.service';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
    private readonly albumsService: AlbumsService,
  ) {}

  @Query(() => [UserModel], { name: 'users' })
  public async getUsers() {
    return this.usersService.findAll();
  }

  @Query(() => UserModel, { name: 'user' })
  public async getUser(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.findById(id);
  }

  @ResolveField(() => [PostModel], { name: 'posts' })
  public async getUserPosts(@Parent() user: UserModel) {
    return this.postsService.findByUserId(user.id);
  }

  @ResolveField(() => [AlbumModel], { name: 'albums' })
  public async getUserAlbums(@Parent() user: UserModel) {
    return this.albumsService.findByUserId(user.id);
  }
}

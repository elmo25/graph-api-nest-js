import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CommentModel } from 'src/comments/comment-model';

import { PostModel } from 'src/posts/post-model';
import { UserModel } from 'src/users/user.model';

import {
  CreatePostInput,
  DeletePostInput,
  PatchPostInput,
  UpdatePostInput,
} from 'src/posts/posts-inputs';

import { PostsService } from 'src/posts/posts.service';
import { UsersService } from 'src/users/users.service';
import { CommentsService } from 'src/comments/comments.service';

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
    private readonly commentsService: CommentsService,
  ) {}

  @Query(() => [PostModel], { name: 'posts' })
  public async getPosts() {
    return this.postsService.findAll();
  }

  @Query(() => PostModel, { name: 'post' })
  public async getPostById(@Args('id', { type: () => ID }) id: number) {
    return this.postsService.findById(id);
  }

  @Query(() => [PostModel], { name: 'userPosts' })
  public async getPostByUserId(
    @Args('userId', { type: () => ID }) userId: number,
  ) {
    return this.postsService.findByUserId(userId);
  }

  @ResolveField(() => UserModel, { name: 'user' })
  public async getUserByPost(@Parent() post: PostModel) {
    return this.usersService.findById(post.userId);
  }

  @ResolveField(() => [CommentModel], { name: 'comments' })
  public async getPostComments(@Parent() post: PostModel) {
    return this.commentsService.findByPostId(post.id);
  }

  @Mutation(() => PostModel, { name: 'createPost' })
  public async createPost(
    @Args('createPostData') createPostData: CreatePostInput,
  ) {
    return this.postsService.create(createPostData);
  }

  @Mutation(() => PostModel, { name: 'updatePost' })
  public async updatePost(
    @Args('updatePostData') updatePostData: UpdatePostInput,
  ) {
    return this.postsService.update(updatePostData);
  }

  @Mutation(() => String, { name: 'deletePost' })
  public async deletePost(
    @Args('deletePostData') deletePostData: DeletePostInput,
  ) {
    return this.postsService.delete(deletePostData);
  }

  @Mutation(() => PostModel, { name: 'patchPost' })
  public async patchPost(@Args('patchPostData') patchPostData: PatchPostInput) {
    return this.postsService.patch(patchPostData);
  }
}

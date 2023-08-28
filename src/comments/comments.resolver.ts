import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { CommentModel } from 'src/comments/comment-model';

import { CommentsService } from 'src/comments/comments.service';

@Resolver(() => CommentModel)
export class CommentsResolver {
  constructor(private readonly commentService: CommentsService) {}

  @Query(() => [CommentModel], { name: 'comments' })
  public async getComments() {
    return this.commentService.findAll();
  }

  @Query(() => CommentModel, { name: 'comment' })
  public async getCommentById(@Args('id', { type: () => ID }) id: number) {
    return this.commentService.findById(id);
  }
}

import { Field, ID, ObjectType } from '@nestjs/graphql';

import { CommentModel } from 'src/comments/comment-model';
import { UserModel } from 'src/users/user.model';

@ObjectType()
export class PostModel {
  @Field(() => ID)
  userId: number;
  @Field(() => ID)
  id: number;
  @Field(() => String)
  title: string;
  @Field(() => String)
  body: string;
  @Field(() => UserModel, { nullable: true })
  user?: UserModel;
  @Field(() => [CommentModel], { nullable: true })
  comments?: CommentModel[];
}

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentModel {
  @Field(() => ID)
  postId: number;
  @Field(() => ID)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  body: string;
}

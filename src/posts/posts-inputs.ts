import { Field, InputType, Int, ID } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  body: string;
  @Field(() => Int)
  userId: number;
}

@InputType()
export class UpdatePostInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  body: string;
  @Field(() => ID)
  readonly userId: number;
  @Field(() => ID)
  readonly id: number;
}

@InputType()
export class DeletePostInput {
  @Field(() => ID)
  id: number;
}

@InputType()
export class PatchPostInput {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  body?: string;
  @Field(() => ID, { nullable: true })
  readonly userId?: number;
  @Field(() => ID)
  readonly id: number;
}

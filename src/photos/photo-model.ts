import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PhotoModel {
  @Field(() => ID)
  id: number;
  @Field(() => ID)
  albumId: number;
  @Field(() => String)
  title: string;
  @Field(() => String)
  url: string;
  @Field(() => String)
  thumbnailUrl: string;
}

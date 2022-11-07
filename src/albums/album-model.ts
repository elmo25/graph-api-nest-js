import { Field, ID, ObjectType } from '@nestjs/graphql';

import { PhotoModel } from 'src/photos/photo-model';
import { UserModel } from 'src/users/user.model';

@ObjectType()
export class AlbumModel {
  @Field(() => ID)
  id: number;
  @Field(() => ID)
  userId: number;
  @Field(() => String)
  title: string;
  @Field(() => [PhotoModel], { nullable: true })
  photos?: PhotoModel[];
  @Field(() => UserModel, { nullable: true })
  user?: UserModel;
}

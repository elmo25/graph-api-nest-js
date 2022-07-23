import { Field, ID, ObjectType } from '@nestjs/graphql';

import { PhotoModel } from 'src/photos/photo-model';

@ObjectType()
export class AlbumModel {
  @Field(() => ID)
  id: string;
  @Field(() => ID)
  user: string;
  @Field(() => String)
  title: string;
  @Field(() => [PhotoModel], { nullable: true })
  photos: PhotoModel[];
}

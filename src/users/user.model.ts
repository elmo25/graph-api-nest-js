import { Field, ID, ObjectType } from '@nestjs/graphql';

import { AlbumModel } from 'src/albums/album-model';

import { PostModel } from 'src/posts/post-model';

@ObjectType()
class UserAddressGeo {
  @Field()
  lat: string;
  @Field()
  lng: string;
}

@ObjectType()
class UserAddress {
  @Field()
  street: string;
  @Field()
  suite: string;
  @Field()
  city: string;
  @Field()
  zipcode: string;
  @Field()
  geo: UserAddressGeo;
}

@ObjectType()
class UserCompany {
  @Field()
  name: string;
  @Field()
  catchPhrase: string;
  @Field()
  bs: string;
}

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field(() => UserAddress)
  address: UserAddress;
  @Field()
  phone: string;
  @Field()
  website: string;
  @Field(() => UserCompany)
  company: UserCompany;
  @Field(() => [PostModel], { nullable: true })
  posts?: PostModel[];
  @Field(() => [AlbumModel], { nullable: true })
  albums?: AlbumModel[];
}

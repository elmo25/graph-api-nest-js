import { Field, ID, ObjectType } from '@nestjs/graphql';

import { AlbumModel } from 'src/albums/album-model';

import { PostModel } from 'src/posts/post-model';

@ObjectType()
class UserAddressGeo {
  @Field(() => String)
  lat: string;
  @Field(() => String)
  lng: string;
}

@ObjectType()
class UserAddress {
  @Field(() => String)
  street: string;
  @Field(() => String)
  suite: string;
  @Field(() => String)
  city: string;
  @Field(() => String)
  zipcode: string;
  @Field(() => UserAddressGeo)
  geo: UserAddressGeo;
}

@ObjectType()
class UserCompany {
  @Field(() => String)
  name: string;
  @Field(() => String)
  catchPhrase: string;
  @Field(() => String)
  bs: string;
}

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  username: string;
  @Field(() => String)
  email: string;
  @Field(() => UserAddress)
  address: UserAddress;
  @Field(() => String)
  phone: string;
  @Field(() => String)
  website: string;
  @Field(() => UserCompany)
  company: UserCompany;
  @Field(() => [PostModel], { nullable: true })
  posts?: PostModel[];
  @Field(() => [AlbumModel], { nullable: true })
  albums?: AlbumModel[];
}

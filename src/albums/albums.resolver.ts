import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { AlbumModel } from 'src/albums/album-model';
import { AlbumsService } from 'src/albums/albums.service';

import { PhotoModel } from 'src/photos/photo-model';
import { PhotosService } from 'src/photos/photos.service';

@Resolver(() => AlbumModel)
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly photosServices: PhotosService,
  ) {}

  @Query(() => [AlbumModel], { name: 'albums' })
  public getAlbums() {
    return this.albumsService.findAll();
  }

  @Query(() => AlbumModel, { name: 'album' })
  public getAlbumById(@Args('albumId', { type: () => ID }) id: number) {
    return this.albumsService.findById(id);
  }

  @Query(() => [AlbumModel], { name: 'userAlbums' })
  public getAlbumsByUserId(
    @Args('userId', { type: () => ID }) userId: number,
  ) {
    return this.albumsService.findByUserId(userId);
  }

  @ResolveField(() => [PhotoModel], { name: 'photos' })
  public getAlbumPhotos(@Parent() album: AlbumModel) {
    return this.photosServices.findByAlbumId(album.id);
  }
}

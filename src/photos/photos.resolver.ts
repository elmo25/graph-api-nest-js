import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { PhotoModel } from 'src/photos/photo-model';
import { PhotosService } from 'src/photos/photos.service';

@Resolver(() => PhotoModel)
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}

  @Query(() => [PhotoModel], { name: 'photos' })
  public getPhotos() {
    return this.photosService.findAll();
  }

  @Query(() => PhotoModel, { name: 'photo' })
  public getPhotoById(@Args('id', { type: () => ID }) id: number) {
    return this.photosService.findById(id);
  }

  @Query(() => [PhotoModel], { name: 'albumPhotos' })
  public getPhotosByAlbumID(
    @Args('albumId', { type: () => ID }) albumId: number,
  ) {
    return this.photosService.findByAlbumId(albumId);
  }
}

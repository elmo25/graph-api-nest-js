import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { PhotoModel } from 'src/photos/photo-model';
import { PhotosService } from 'src/photos/photos.service';

@Resolver(() => PhotoModel)
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}

  @Query(() => [PhotoModel], { name: 'photos' })
  public async getPhotos() {
    return this.photosService.findAll();
  }

  @Query(() => PhotoModel, { name: 'photo' })
  public async getPhotoById(@Args('id', { type: () => ID }) id: number) {
    return this.photosService.findById(id);
  }

  @Query(() => [PhotoModel], { name: 'albumPhotos' })
  public async getPhotosByAlbumID(
    @Args('albumId', { type: () => ID }) albumId: number,
  ) {
    return this.photosService.findByAlbumId(albumId);
  }
}

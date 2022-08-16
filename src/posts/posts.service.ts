import { Injectable } from '@nestjs/common';

import { map } from 'rxjs';

import { ConfigService } from 'src/config/config.service';
import { FetcherService } from 'src/fetcher/fetcher.service';
import { PostModel } from 'src/posts/post-model';
import {
  CreatePostInput,
  DeletePostInput,
  PatchPostInput,
  UpdatePostInput,
} from 'src/posts/posts-inputs';

@Injectable()
export class PostsService {
  constructor(
    private readonly fetcherService: FetcherService,
    private readonly configService: ConfigService,
  ) {}

  public findAll() {
    return this.fetcherService.get<PostModel[]>(this.configService.posts);
  }

  public findById(id: number) {
    return this.fetcherService.get<PostModel>(
      this.configService.getPostById(id),
    );
  }

  public findByUserId(userId: number) {
    return this.fetcherService.get<PostModel[]>(
      this.configService.getPostsByUserId(userId),
    );
  }

  public create(postData: CreatePostInput) {
    return this.fetcherService.post<PostModel, CreatePostInput>(
      this.configService.posts,
      postData,
    );
  }

  public update(postData: UpdatePostInput) {
    return this.fetcherService.put<PostModel, UpdatePostInput>(
      this.configService.getPostById(postData.id),
      postData,
    );
  }

  public delete(postData: DeletePostInput) {
    return this.fetcherService
      .delete(this.configService.getPostById(postData.id))
      .pipe(map(() => `Post with id: ${postData.id} was deleted`));
  }

  public patch(patchPostData: PatchPostInput) {
    return this.fetcherService.patch<PostModel, PatchPostInput>(
      this.configService.getPostById(patchPostData.id),
      patchPostData,
    );
  }
}

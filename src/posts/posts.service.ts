import { Injectable } from '@nestjs/common';

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

  public async findAll() {
    return this.fetcherService.get<PostModel[]>(this.configService.posts);
  }

  public async findById(id: number) {
    return this.fetcherService.get<PostModel>(
      this.configService.getPostById(id),
    );
  }

  public async findByUserId(userId: number) {
    return this.fetcherService.get<PostModel[]>(
      this.configService.getPostsByUserId(userId),
    );
  }

  public async create(postData: CreatePostInput) {
    return this.fetcherService.post<PostModel, CreatePostInput>(
      this.configService.posts,
      postData,
    );
  }

  public async update(postData: UpdatePostInput) {
    return this.fetcherService.put<PostModel, UpdatePostInput>(
      this.configService.getPostById(postData.id),
      postData,
    );
  }

  public async delete(postData: DeletePostInput) {
    return this.fetcherService.delete(
      this.configService.getPostById(postData.id),
    );
  }

  public async patch(patchPostData: PatchPostInput) {
    return this.fetcherService.patch<PostModel, PatchPostInput>(
      this.configService.getPostById(patchPostData.id),
      patchPostData,
    );
  }
}

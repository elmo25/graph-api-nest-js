import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { map, Observable } from 'rxjs';

import { ConfigService } from 'src/config/config.service';
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
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public findAll(): Observable<PostModel[]> {
    return this.httpService
      .get<PostModel[]>(this.configService.posts)
      .pipe(map((res) => res.data));
  }

  public findById(id: number): Observable<PostModel> {
    return this.httpService
      .get<PostModel>(this.configService.getPostById(id))
      .pipe(map((res) => res.data));
  }

  public findByUserId(userId: number): Observable<PostModel[]> {
    return this.httpService
      .get<PostModel[]>(this.configService.getPostsByUserId(userId))
      .pipe(map((res) => res.data));
  }

  public create(postData: CreatePostInput): Observable<PostModel> {
    return this.httpService
      .post<PostModel>(this.configService.posts, postData)
      .pipe(map((res) => res.data));
  }

  public update(postData: UpdatePostInput): Observable<PostModel> {
    return this.httpService
      .put<PostModel>(this.configService.getPostById(postData.id), postData)
      .pipe(map((res) => res.data));
  }

  public delete(postData: DeletePostInput): Observable<string> {
    return this.httpService
      .delete<Record<string, unknown>>(
        this.configService.getPostById(postData.id),
      )
      .pipe(map(() => `Post with id: ${postData.id} was deleted`));
  }

  public patch(patchPostData: PatchPostInput): Observable<PostModel> {
    return this.httpService
      .patch<PostModel>(
        this.configService.getPostById(patchPostData.id),
        patchPostData,
      )
      .pipe(map((res) => res.data));
  }
}

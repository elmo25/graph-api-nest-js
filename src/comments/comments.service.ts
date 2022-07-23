import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { map, Observable } from 'rxjs';

import { CommentModel } from 'src/comments/comment-model';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CommentsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  public findAll(): Observable<CommentModel[]> {
    return this.httpService
      .get<CommentModel[]>(this.configService.comments)
      .pipe(map((res) => res.data));
  }

  public findById(id: number): Observable<CommentModel> {
    return this.httpService
      .get<CommentModel>(this.configService.getCommentById(id))
      .pipe(map((res) => res.data));
  }

  public findByPostId(postId: number): Observable<CommentModel[]> {
    return this.httpService
      .get<CommentModel[]>(this.configService.getCommentsByPostId(postId))
      .pipe(map((res) => res.data));
  }
}

import { Injectable } from '@nestjs/common';

import { CommentModel } from 'src/comments/comment-model';
import { ConfigService } from 'src/config/config.service';
import { FetcherService } from 'src/fetcher/fetcher.service';

@Injectable()
export class CommentsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly fetcherService: FetcherService,
  ) {}

  public findAll() {
    return this.fetcherService.get<CommentModel[]>(this.configService.comments);
  }

  public findById(id: number) {
    return this.fetcherService.get<CommentModel>(
      this.configService.getCommentById(id),
    );
  }

  public findByPostId(postId: number) {
    return this.fetcherService.get<CommentModel[]>(
      this.configService.getCommentsByPostId(postId),
    );
  }
}

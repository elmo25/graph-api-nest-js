import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';
  private readonly postPrefix: string = '?postId=';
  private readonly userPrefix: string = '?userId=';
  private readonly albumPrefix: string = '?albumId=';
  public readonly users: string = `${this.baseUrl}/users`;
  public readonly posts: string = `${this.baseUrl}/posts`;
  public readonly albums: string = `${this.baseUrl}/albums`;
  public readonly photos: string = `${this.baseUrl}/photos`;
  public readonly comments: string = `${this.baseUrl}/comments`;

  public getUserById(id: number): string {
    return `${this.users}/${id}`;
  }

  public getPostById(id: number): string {
    return `${this.posts}/${id}`;
  }

  public getPostsByUserId(userId: number): string {
    return `${this.posts}${this.userPrefix}${userId}`;
  }

  public getCommentById(id: number): string {
    return `${this.comments}/${id}`;
  }

  public getCommentsByPostId(postId: number): string {
    return `${this.comments}${this.postPrefix}${postId}`;
  }

  public getAlbumsById(id: number): string {
    return `${this.albums}/${id}`;
  }

  public getAlbumsByUserId(userId: number): string {
    return `${this.albums}/${this.userPrefix}${userId}`;
  }

  public getPhotoById(id: number): string {
    return `${this.photos}/${id}`;
  }

  public getPhotosByAlbumId(albumId: number): string {
    return `${this.photos}/${this.albumPrefix}${albumId}`;
  }
}

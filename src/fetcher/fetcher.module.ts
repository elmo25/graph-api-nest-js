import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FetcherService } from './fetcher.service';

@Module({
  imports: [HttpModule],
  providers: [FetcherService],
  exports: [FetcherService],
})
export class FetcherModule {}

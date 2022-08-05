import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './database/mongo.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

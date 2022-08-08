import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { MongoModule } from './database/mongo.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

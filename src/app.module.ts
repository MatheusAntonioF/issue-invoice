import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';

import { MongoModule } from './database/mongo.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoModule,
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    UsersModule,
    InvoicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

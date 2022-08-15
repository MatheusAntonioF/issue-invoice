import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { mongoURI } from 'src/database/helpers/mongo-uri.helper';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: mongoURI(configService),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {}

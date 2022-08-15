import { ConfigService } from '@nestjs/config';

export function mongoURI(configService: ConfigService) {
  const mongoUser = configService.get<string>('MONGO_USERNAME');
  const mongoPassword = configService.get<string>('MONGO_PASSWORD');
  const mongoDbName = configService.get<string>('MONGO_DATABASE');

  if (!(mongoUser || mongoPassword || mongoDbName)) {
    throw new Error(
      'Failed to connect with MONGO instance! Its missing credentials',
    );
  }

  const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@database:27017/${mongoDbName}`;

  return mongoURI;
}

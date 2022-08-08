import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './infra/http/controllers/users.controller';
import { User, UserSchema } from './infra/mongo/entities/user.entity';
import { UsersRepository } from './infra/mongo/repositories/users.repository';
import { CreateUserUseCase } from './useCases/create-user.use-case';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    {
      useClass: UsersRepository,
      provide: 'UsersRepository',
    },
    CreateUserUseCase,
  ],
})
export class UsersModule {}

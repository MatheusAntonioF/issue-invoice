import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/modules/users/dtos/create-user.dto';
import { CreateUserUseCase } from 'src/modules/users/useCases/create-user.use-case';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createUser: CreateUserDTO) {
    return this.createUserUseCase.execute(createUser);
  }
}

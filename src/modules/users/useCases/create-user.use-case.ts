import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';
import { hashRounds } from 'src/config/hash.config';

import { UserRepositoryContract } from '../contract/user-repository.contract';
import { CreateUserDTO } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UserRepositoryContract,
  ) {}

  async execute({ name, email, password }: CreateUserDTO) {
    try {
      const userAlreadyExists = await this.usersRepository.findByEmail(email);

      if (userAlreadyExists)
        throw new BadRequestException('User already exists');

      const passwordHashed = await hash(password, hashRounds);

      const createdUser = await this.usersRepository.create({
        name,
        email,
        password: passwordHashed,
      });

      return createdUser;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

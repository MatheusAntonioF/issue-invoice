import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRepositoryContract } from 'src/modules/users/contract/user-repository.contract';
import { CreateUserDTO } from 'src/modules/users/dtos/create-user.dto';
import { User, UserDocument } from '../entities/user.entity';

@Injectable()
export class UsersRepository implements UserRepositoryContract {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    const foundUser = await this.userModel.findOne({ email });

    return foundUser;
  }

  async create({ name, email, password }: CreateUserDTO): Promise<User> {
    const createdUser = await this.userModel.create({
      name,
      email,
      password,
    });

    const serializedUser = createdUser.toObject<User>();

    delete serializedUser.password;

    return serializedUser;
  }
}

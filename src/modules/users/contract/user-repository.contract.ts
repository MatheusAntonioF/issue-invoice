import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserDocument } from '../infra/mongo/entities/user.entity';

export abstract class UserRepositoryContract {
  abstract findByEmail(email: string): Promise<UserDocument | null>;

  abstract create(data: CreateUserDTO): Promise<UserDocument>;
}

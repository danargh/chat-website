import { UseCase } from '@/core/base/use-case';
import { UserEntity } from '@/core/entities/user.entity';
import { UserRepository } from '@/core/repositories/user.repository';
import { UserDto } from '@/shared/dtos/users/user.dto';
import { plainToClass } from 'class-transformer';

export class FindAllUsersUseCase implements UseCase<UserDto[]> {
   constructor(private readonly repository: UserRepository) {}

   public async execute(): Promise<UserDto[]> {
      // create user
      const users = await this.repository.findAll();

      // conversion entity to dto
      return users.map((user) => plainToClass(UserEntity, user));
   }
}

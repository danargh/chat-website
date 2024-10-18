import { UseCase } from '@/core/base/use-case';
import { UserEntity } from '@/core/entities/user.entity';
import { UserRepository } from '@/core/repositories/user.repository';
import { UserDto } from '@/shared/dtos/users/user.dto';
import { plainToClass, plainToInstance } from 'class-transformer';

export class CreateUserUseCase implements UseCase<UserDto> {
   constructor(private readonly repository: UserRepository) {}

   public async execute(user: UserDto): Promise<UserEntity> {
      const createdUser = await this.repository.create(user);

      return plainToClass(UserEntity, createdUser);
   }
}

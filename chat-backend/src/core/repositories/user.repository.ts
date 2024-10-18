import { UserDto } from '@/shared/dtos/users/user.dto';
import { Repository } from '../base/repository';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository extends Repository<UserDto, UserEntity> {}

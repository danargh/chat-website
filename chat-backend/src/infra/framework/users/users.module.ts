import { UserRepository } from '@/core/repositories/user.repository';
import { PrismaUserRepository } from '@/infra/data/prisma/prisma-user.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';
import { CreateUserUseCase } from 'src/use-case/users/create-user';
import { FindAllUsersUseCase } from 'src/use-case/users/find-all-users';
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';

@Module({
   controllers: [UserController],
   providers: [
      PrismaService,
      {
         provide: UserRepository,
         useFactory: (prisma: PrismaService) => new PrismaUserRepository(prisma),
         inject: [PrismaService],
      },
      {
         provide: CreateUserUseCase,
         useFactory: (repository: UserRepository) => new CreateUserUseCase(repository),
         inject: [UserRepository],
      },
      {
         provide: FindAllUsersUseCase,
         useFactory: (repository: UserRepository) => new FindAllUsersUseCase(repository),
         inject: [UserRepository],
      },
   ],
})
export class UsersModule {}

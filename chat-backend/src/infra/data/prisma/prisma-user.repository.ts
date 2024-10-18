import { UserRepository } from 'src/core/repositories/user.repository';
import { PrismaService } from './prisma.service';
import { UserEntity } from '@/core/entities/user.entity';
import { Prisma } from '@prisma/client';
import { UserDto } from '@/shared/dtos/users/user.dto';

export class PrismaUserRepository implements UserRepository {
   constructor(private prisma: PrismaService) {}

   async create(data: UserDto): Promise<UserEntity> {
      return this.prisma.user.create({ data });
   }

   async findAll(filter?: Partial<UserEntity>): Promise<UserEntity[]> {
      return this.prisma.user.findMany({ where: filter });
   }

   // edited
   async findOne(filter: Partial<UserEntity>): Promise<UserEntity> {
      return this.prisma.user.findUnique({ where: filter as Prisma.UserWhereUniqueInput });
   }

   async update(id: number, data: Partial<UserEntity>): Promise<UserEntity> {
      return this.prisma.user.update({ where: { id }, data });
   }

   async remove(id: number): Promise<void> {
      await this.prisma.user.delete({ where: { id } });
   }
}

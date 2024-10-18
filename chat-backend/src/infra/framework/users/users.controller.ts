import { UserDto } from '@/shared/dtos/users/user.dto';
import { CreateUserUseCase } from 'src/use-case/users/create-user';
import { FindAllUsersUseCase } from 'src/use-case/users/find-all-users';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
   constructor(
      private createUserUseCase: CreateUserUseCase,
      private findAllUsersUseCase: FindAllUsersUseCase,
   ) {}

   @Post()
   async create(@Body() data: UserDto) {
      // masih error ya ges

      return this.createUserUseCase.execute(data);
   }

   @Get()
   async findAll() {
      return this.findAllUsersUseCase.execute();
   }
}

import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class UserDto {
   // exclude id from serialization when creating
   @Exclude()
   id?: number;

   @IsNotEmpty()
   @IsString()
   @Length(3, 50)
   @ApiProperty({
      example: 'John Doe',
   })
   name: string;

   @IsString()
   @IsEmail()
   @ApiProperty({
      example: 'johndoe@example.com',
   })
   email: string;

   @IsString()
   @MinLength(5)
   @IsNotEmpty()
   @ApiProperty({
      example: '123456',
   })
   password: string;
}

import { Exclude, Expose } from 'class-transformer';

export class UserEntity {
   @Expose()
   id: number;

   @Expose()
   name: string;

   @Expose()
   email: string;

   @Exclude()
   password: string;

   constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
   }
}

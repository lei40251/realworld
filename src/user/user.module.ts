import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  import:[TypeOrmModule.forFeature([User])],
  providers: [UserService]
})
export class UserModule {}

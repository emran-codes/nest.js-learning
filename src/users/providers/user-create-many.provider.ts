import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { User } from '../user.entity';
// import { DataSource } from 'typeorm';
import { CreateManyUsersDto } from '../dtos/createManyUsers.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class UserCreateManyProvider {
  constructor(private dataSource: DataSource) {}
  public async createMany(createUserDtos: CreateManyUsersDto) {
    const newUsers: User[] = [];
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    try {
      for (let user of createUserDtos.users) {
        let newUser = queryRunner.manager.create(User, user);
        let result = await queryRunner.manager.save(User, newUser);
        newUsers.push(result);
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
    return newUsers;
  }
}

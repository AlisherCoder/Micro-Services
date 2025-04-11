import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '@app/shared-dto';
import { UpdateUserDto } from '@app/shared-dto/user/update.dto';

@Injectable()
export class UserService {
  constructor(@Inject('user') private userclient: ClientProxy) {}

  create(createUserDto: CreateUserDto) {
    return this.userclient.send('createUser', createUserDto);
  }

  findAll() {
    return this.userclient.send('findAllUser', {});
  }

  findOne(id: number) {
    return this.userclient.send('findOneUser', { id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userclient.send('updateUser', { ...updateUserDto, id });
  }

  remove(id: number) {
    return this.userclient.send('removeUser', { id });
  }
}

import { Injectable } from '@nestjs/common';

import { UserID } from '../../../common/types/entity-ids.type';
import { UpdateUserReqDto } from '../models/dto/req/update-user.req.dto';

@Injectable()
export class UsersService {
  findAll() {
    return `This action returns all users`;
  }

  findOne(id: UserID) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: UserID, updateUserDto: UpdateUserReqDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: UserID) {
    return `This action removes a #${id} user`;
  }
}

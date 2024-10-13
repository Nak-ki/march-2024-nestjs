import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersAdminService } from './users-admin.service';

@ApiTags('UsersAdmin')
@Controller('users-admin')
export class UsersAdminController {
  constructor(private readonly usersService: UsersAdminService) {}

  @Post('ban')
  ban(@Body() dto: any) {
    return this.usersService.ban(dto.id);
  }
}

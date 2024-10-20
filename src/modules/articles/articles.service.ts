import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { CreateArticleReqDto } from './models/dto/req/create-article.req.dto';
import { UpdateArticleReqDto } from './models/dto/req/update-article.req.dto';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly userService: UsersService,
    // private readonly commentsService: CommentsService,
  ) {}
  create(dto: CreateArticleReqDto) {
    this.userService.checkAbilityToEditArticle('authorId', 'articleId');
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all articles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleReqDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    // this.commentsService.deleteAllCommentsForArticle('articleId');
    return `This action removes a #${id} user`;
  }
}

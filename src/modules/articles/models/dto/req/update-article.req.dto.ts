import { PartialType } from '@nestjs/swagger';

import { CreateArticleReqDto } from './create-article.req.dto';

export class UpdateArticleReqDto extends PartialType(CreateArticleReqDto) {}

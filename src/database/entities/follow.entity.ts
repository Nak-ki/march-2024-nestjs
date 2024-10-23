import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CreateUpdateModel } from './models/create-update.model';
import { UserEntity } from './user.entity';

@Entity('users')
export class FollowEntity extends CreateUpdateModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  follower_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.followers)
  @JoinColumn({ name: 'follower_id' })
  follower?: UserEntity;

  @Column()
  following_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.followings)
  @JoinColumn({ name: 'following_id' })
  following?: UserEntity;
}

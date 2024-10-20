import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBioInUserEntity1729422648289 implements MigrationInterface {
    name = 'AddBioInUserEntity1729422648289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
    }

}

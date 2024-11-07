import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDeletedUser1730986018276 implements MigrationInterface {
    name = 'AddDeletedUser1730986018276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted"`);
    }

}

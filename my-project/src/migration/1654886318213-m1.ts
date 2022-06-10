import { MigrationInterface, QueryRunner } from "typeorm";

export class m11654886318213 implements MigrationInterface {
    name = 'm11654886318213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" integer `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}

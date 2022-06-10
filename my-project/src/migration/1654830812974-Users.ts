import { MigrationInterface, QueryRunner } from "typeorm"

export class Users1654830812974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "Nombre" TO "nombre"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

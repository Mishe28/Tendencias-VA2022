import { MigrationInterface, QueryRunner } from "typeorm"

export class User1654832800358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "Nombre" TO "nombre"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1669734747253 implements MigrationInterface {
  name = 'createUserTable1669734747253';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "height" character varying NOT NULL, "weight" character varying NOT NULL, "photoes" character varying NOT NULL, "occupation" character varying NOT NULL, "hobbies" character varying NOT NULL, "location" character varying NOT NULL, "zodiac_sign" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}

/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class RevRevertNoteEdit1720853122058 {
    name = 'RevRevertNoteEdit1720853122058'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" IF NOT EXIST "updatedAt" ADD "updatedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "note" IF NOT EXIST "updatedAtHistory" ADD "updatedAtHistory" TIMESTAMP WITH TIME ZONE ARRAY`);
        await queryRunner.query(`ALTER TABLE "note" IF NOT EXIST "noteEditHistory" ADD "noteEditHistory" character varying array`)
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" IF EXISTS "updatedAt" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "note" IF EXISTS "updatedAt" DROP "updatedAtHistory"`);
        await queryRunner.query(`ALTER TABLE "note" IF EXISTS "updatedAt" DROP "noteEditHistory"`)
    }

}

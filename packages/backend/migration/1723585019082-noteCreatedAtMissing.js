/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */
// 1723585019082-noteCreatedAtMissing.js
export class NoteCreatedAtMissing1723585019082 {
    name = 'NoteCreatedAtMissing1723585019082'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" IF NOT EXIST "createdAt" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" IF EXISTS "createdAt" DROP COLUMN "createdAt"`);
    }

}

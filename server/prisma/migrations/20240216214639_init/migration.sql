-- AlterTable
ALTER TABLE "workspaces" ADD COLUMN "chatMode" TEXT DEFAULT 'chat' CHECK (chatMode IN ('chat', 'other_valid_value'));

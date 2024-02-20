-- AlterTable
ALTER TABLE "workspace_documents" ADD COLUMN "pinned" BOOLEAN DEFAULT false;
CREATE INDEX idx_workspace_documents_pinned ON workspace_documents(pinned);
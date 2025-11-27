import { prisma } from "../infrastructure/db";

async function test() {
  const version = await prisma.$queryRaw`select version()`;
  console.log("DB Connected:", version);
}

test().catch(console.error);

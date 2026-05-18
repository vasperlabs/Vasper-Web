import { PrismaClient } from '@prisma/client';

async function testConnection(url, name) {
  const prisma = new PrismaClient({
    datasourceUrl: url,
    log: ['query', 'info', 'warn', 'error']
  });
  try {
    console.log(`\nTesting ${name}...`);
    await prisma.inquiry.findMany({ take: 1 });
    console.log(`✅ Success for ${name}!`);
  } catch (error) {
    console.error(`❌ Error for ${name}:`, error.message);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  const basePwd = "npg_LzDl6BPoCX0a";
  const user = "neondb_owner";
  
  const pooledHost = "ep-tiny-paper-alix8h6u-pooler.c-3.eu-central-1.aws.neon.tech";
  const unpooledHost = "ep-tiny-paper-alix8h6u.c-3.eu-central-1.aws.neon.tech";

  const url1 = `postgresql://${user}:${basePwd}@${pooledHost}/neondb?sslmode=require`;
  const url2 = `postgresql://${user}:${basePwd}@${pooledHost}/neondb?sslmode=require&pgbouncer=true`;
  const url3 = `postgresql://${user}:${basePwd}@${unpooledHost}/neondb?sslmode=require`;

  await testConnection(url1, "Pooled without pgbouncer=true");
  await testConnection(url2, "Pooled WITH pgbouncer=true");
  await testConnection(url3, "Unpooled");
}

main();

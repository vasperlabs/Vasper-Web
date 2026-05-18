const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
  try {
    console.log('Veritabanına bağlanılıyor...');
    const users = await prisma.inquiry.findMany({ take: 1 });
    console.log('✅ Bağlantı BAŞARILI! Veri:', users);
  } catch (error) {
    console.error('❌ Bağlantı HATASI:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();

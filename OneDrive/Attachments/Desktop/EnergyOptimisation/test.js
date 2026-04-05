const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.energyData.count().then(console.log).catch(console.error).finally(() => process.exit(0));

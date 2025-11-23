import { PrismaService } from './prisma.service';

let prismaInstance: PrismaService | null = null;

export function setPrismaInstance(prisma: PrismaService) {
  prismaInstance = prisma;
}

export function getPrismaInstance(): PrismaService {
  if (!prismaInstance) {
    throw new Error('PrismaService has not been initialized yet.');
  }
  return prismaInstance;
}

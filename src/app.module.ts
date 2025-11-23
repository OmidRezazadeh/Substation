import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubModule } from './club/club.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { setPrismaInstance } from './prisma/prisma.client';

@Module({
  imports: [ClubModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  onModuleInit() {
    setPrismaInstance(this.prisma);
  }
}

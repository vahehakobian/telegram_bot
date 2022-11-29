import { ConfigModule } from '@nestjs/config';
import { NestjsGrammyModule } from '@grammyjs/nestjs';
import { Module } from '@nestjs/common';
import { TelegramBotModule } from './modules/telegram_bot/telegram_bot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/api-config.service';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    TelegramBotModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        configService.postgresConfig,
      inject: [ApiConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NestjsGrammyModule.forRoot({
      token: process.env.TG_TOKEN,
    }),
  ],
  providers: [],
})
export class AppModule {}

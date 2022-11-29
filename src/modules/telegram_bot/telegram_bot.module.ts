import { TelegramBotUpdates } from './telegram_bot.controller';
import { TelegramBotService } from './telegram_bot.service';
import { Module } from '@nestjs/common';
@Module({
  imports: [],
  providers: [TelegramBotUpdates, TelegramBotService],
})
export class TelegramBotModule {}

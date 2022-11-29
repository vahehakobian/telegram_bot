import { Bot, Context } from 'grammy';
import {
  InjectBot,
  Update,
  Start,
  Ctx,
  Help,
  Admin,
  Hears,
  Message,
} from '@grammyjs/nestjs';

@Update()
export class TelegramBotUpdates {
  constructor(
    @InjectBot()
    private readonly bot: Bot<Context>, // private readonly echoService: EchoService,
  ) {
    console.log(
      'echo update starting',
      this.bot ? this.bot.botInfo.id : '(booting)',
    );
  }

  @Start()
  async onStart(@Ctx() ctx: Context): Promise<void> {
    // const me = await this.bot.api.getMe()
    console.log('onStart!!', this.bot ? this.bot.botInfo : '(booting)');
    ctx.reply(
      `Hello  My name is ${this.bot.botInfo.first_name} \ncan I help you /help \nor click /register for Registraton 🙈`,
    );
  }

  @Help()
  async onHelp(@Ctx() ctx: Context): Promise<void> {
    ctx.reply('Send me any text');
  }

  @Admin()
  // @UseGuards(AdminGuard)
  async onAdminCommand(@Ctx() ctx: Context): Promise<void> {
    ctx.reply('Welcome, Judge');
  }

  @Hears('/register')
  async onMessage(
    @Ctx() ctx: Context,
    @Message('text') reversedText: string,
  ): Promise<void> {
    console.log(ctx.from);

    ctx.reply(reversedText);
  }
}

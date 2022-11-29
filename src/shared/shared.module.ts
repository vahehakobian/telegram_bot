import { ApiConfigService } from './api-config.service';
import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

const providers = [ApiConfigService];

@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}

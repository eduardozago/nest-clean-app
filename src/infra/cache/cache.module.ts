import { Module } from '@nestjs/common'
import { EnvModule } from '../env/env.module'
import { RedisService } from './redis/redis.service'

@Module({
  imports: [EnvModule],
  providers: [RedisService],
})
export class CacheModule {}

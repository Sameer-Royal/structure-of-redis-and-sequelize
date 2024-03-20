import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';
import { RedisClientType } from '@redis/client';
@Injectable()
export class RedisService {
  redisClient: RedisClientType;
  constructor() {
    this.redisClient = createClient({
      url: 'redis://127.0.0.1:6379',
    });
    this.redisClient.connect();
  }
  async setHash(value: object) {
    return await this.redisClient.hSet('UniqueKey', { ...value });
  }
  async getHash(key: string) {
    return await this.redisClient.hGetAll('UniqueKey');
  }
}

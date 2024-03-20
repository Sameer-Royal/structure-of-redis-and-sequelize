import { RedisClientType } from '@redis/client';
export declare class RedisService {
    redisClient: RedisClientType;
    constructor();
    setHash(value: object): Promise<number>;
    getHash(key: string): Promise<{
        [x: string]: string;
    }>;
}

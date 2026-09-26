import { Redis } from "@upstash/redis";

// similar to process.env(); specific for Redis
export const redis = Redis.fromEnv();
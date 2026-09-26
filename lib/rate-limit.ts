import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis";

export const formRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(1, "1 m"),
  prefix: "ratelimit:contact-form",
  analytics: true,
});
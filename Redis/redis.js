//// redis JS

import Redis from "ioredis";
const redis = new Redis();

// cache example
async function getUser(id) {
  const cached = await redis.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  const user = await db.findUser(id);
  await redis.set(`user:${id}`, JSON.stringify(user), "EX", 60);
  return user;
}



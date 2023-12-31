import nextAppSession from 'next-app-session';

export type SessionData = {
  counter?: number;
  user?: object;
};

/**
 * Default implementation
 */
export const session = nextAppSession<SessionData>({
  name: 'EXAMPLE_SID',
  secret: process.env.COOKIE_SECRET
});

/**
 * Redis implementation
 */
/*import Redis from 'ioredis';
import RedisStore from 'connect-redis';

export const session = nextAppSession<SessionData>({
  name: 'EXAMPLE_SID',
  secret: process.env.COOKIE_SECRET,
  // Setup store
  store: promisifyStore(
    new RedisStore({
      client: new Redis({
        host: 'localhost',
        port: 6381
      }),
      prefix: 'exampleapp:'
    })
  )
});*/

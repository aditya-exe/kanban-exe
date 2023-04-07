import { createTRPCRouter } from "@/server/api/trpc";
import { boardsRouter } from "./routers/boards";
// import { exampleRouter } from "@/server/api/routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // example: exampleRouter,
  boards: boardsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

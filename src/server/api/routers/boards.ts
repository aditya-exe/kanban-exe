import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const boardsRouter = createTRPCRouter({
  createBoard: protectedProcedure
    .input(z.object({
      name: z.string(),
      columns: z.array(z.object({ name: z.string() }))
    }))
    .mutation(async ({ ctx, input }) => {
      const board = await ctx.prisma.board.create({
        data: {
          name: input.name,
          columns: { createMany: { data: input.columns } }
        },
        select: {
          id: true,
          name: true,
          columns: { select: { name: true, id: true } },
        }
      });

      return {
        id: board.id,
        name: board.name,
        tasks: [],
        columns: board.columns.map((column) => {
          return {
            id: column.id,
            name: column.name,
          }
        })
      };
    })
})
import { getUserId, Context } from "../utils";

export const Query = {
  me(parent, args, ctx: Context) {
    const userId = getUserId(ctx);
    return ctx.prisma.user({ id: userId });
  },
  apartments(parent, args, ctx: Context) {
    const userId = getUserId(ctx);
    return ctx.prisma.apartments({where: {
      user: {id: userId}
    }});
  },
};

import { Context } from "./../../utils";
import { getUserId } from "../../utils";

export const place = {
  createPlace(parent, args, ctx: Context) {
    // const userId = getUserId(ctx);
    return ctx.prisma.createPlace({
      name: args.name,
      difficulty: args.difficulty,
      apartment: {
        connect: { id: args.apartmentId }
      }
    });
  },
  updatePlace(parent, args, ctx) {
    // const userId = getUserId(ctx);
    const data = { ...args };
    delete data.id;

    return ctx.prisma.updatePlace({
      data,
      where: { id: args.id }
    });
  },
  deletePlace(parent, args, ctx) {
    return ctx.prisma.deletePlace({ id: args.id });
  }
};

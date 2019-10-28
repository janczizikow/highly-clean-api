import { Context } from "./../../utils";
import { getUserId } from "../../utils";

export const place = {

  async createPlace(parent, args, ctx: Context) {
    const userId = getUserId(ctx);
    const aptUser = await ctx.prisma.apartment({ id: args.apartmentId }).user();
    if (aptUser.id != userId) {
      throw new Error("Error, tried to add a place to someone else's apartment");
    };

    return ctx.prisma.createPlace({
      name: args.name,
      difficulty: args.difficulty,
      apartment: {
        connect: { id: args.apartmentId }
      }
    });
  },

  async updatePlace(parent, args, ctx) {
    const userId = getUserId(ctx);
    const aptUser = await ctx.prisma.place({ id: args.id }).apartment().user();
    if (aptUser.id != userId) {
      throw new Error("Error, tried to update a place in someone else's apartment");
    };

    const data = { ...args };
    delete data.id;

    return ctx.prisma.updatePlace({
      data,
      where: { id: args.id }
    });
  },

  async deletePlace(parent, args, ctx) {
    const userId = getUserId(ctx);
    const aptUser = await ctx.prisma.place({ id: args.id }).apartment().user();
    if (aptUser.id != userId) {
      throw new Error("Error, tried to remove a place from someone else's apartment");
    };

    return ctx.prisma.deletePlace({ id: args.id });
  }

};

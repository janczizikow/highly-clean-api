import { getUserId, Context } from "../utils";

export const Query = {
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx);
    return ctx.prisma.user({ id });
  },
  apartment(parent, args, ctx: Context) {
    return ctx.prisma.apartment({ id: args.id });
  },
  apartments(parent, args, ctx: Context) {
    return ctx.prisma.apartments();
  },
  placesByApartmentId(parent, args, ctx: Context) {
    return ctx.prisma.apartment({ id: args.apartmentId }).places();
  }
};

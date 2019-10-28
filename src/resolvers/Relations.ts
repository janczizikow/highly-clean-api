import { Context } from "../utils";

const Relations = {

  User: {
    apartments(parent, args, ctx: Context) {
      return ctx.prisma.user({ id: parent.id }).apartments();
    },
  },

  Apartment: {
    places(parent, args, ctx: Context) {
      return ctx.prisma.apartment({ id: parent.id }).places();
    },
    user(parent, args, ctx: Context) {
      return ctx.prisma.apartment({ id: parent.id }).user();
    }
  },

  Place: {
    apartment(parent, args, ctx: Context) {
      return ctx.prisma.place({ id: parent.id }).apartment();
    }
  }

}

export default Relations;

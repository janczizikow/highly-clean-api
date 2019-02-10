import { getUserId, Context } from "./../../utils";

export const apartment = {
  async createApartment(parent, args, ctx: Context, info) {
    // const userId = getUserId(ctx);
    // console.log(args);

    // if (!userId) {
    //   throw new Error("You must be logged in to do this");
    // }

    const apartment = await ctx.prisma.createApartment({
      name: args.name,
      image:
        "https://www.visitberlin.de/system/files/styles/visitberlin_teaser_single_visitberlin_mobile_1x/private/image/_SCH6057_c_Scholvien_PSR_SC_STD_V2_DL_PPT_0.jpg?h=32462309&itok=Xi0CMgn5"
    });

    return apartment;
  },
  async updateApartment(parent, args, ctx) {
    // const userId = getUserId(ctx);

    // if (!userId) {
    //   throw new Error("You must be logged in to do this");
    // }

    const data = { ...args };

    delete data.id;

    return ctx.prisma.updateApartment({
      data,
      where: {
        id: args.id
      }
    });
  },
  async deleteApartment(parent, args, ctx) {
    // const userId = getUserId(ctx);

    // if (!userId) {
    //   throw new Error("You must be logged in to do this");
    // }

    // clean up apartment place
    const apartmentPlacesIds = await ctx.prisma
      .places({
        where: { apartment: { id: args.id } }
      })
      .map(place => place.id);
    await ctx.prisma.deleteManyPlaces({
      where: { id: apartmentPlacesIds }
    });

    return ctx.prisma.deleteApartment({ id: args.id });
  }
};

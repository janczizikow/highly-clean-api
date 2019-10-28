import { getUserId, Context } from "./../../utils";

export const apartment = {

  async createApartment(parent, args, ctx: Context, info) {
    const userId = getUserId(ctx);

    const apartment = await ctx.prisma.createApartment({
      name: args.name,
      image: args.image,
      places: {
        create: [
          {
            name: "Default place for "+args.name,
            difficulty: 1,
          }
        ]
      },
      user: {
        connect: {
          id: userId
        }
      },
    });

    return apartment;
  },

  async updateApartment(parent, args, ctx) {
    const userId = getUserId(ctx);
    const aptUser = await ctx.prisma.apartment({ id: args.id }).user();
    if (aptUser.id != userId) {
      throw new Error("Error, tried to update someone else's apartment");
    };

    const data = { ...args };

    delete data.id;
    delete data.placeIds;

    if (args.placeIds && args.placeIds.length != 0) {
      data.places = {connect: args.placeIds.map((placeId: { id: string; })=>{return {id:  placeId};})};
    }

    return ctx.prisma.updateApartment({
      data,
      where: {
        id: args.id
      }
    });
  },

  async deleteApartment(parent, args, ctx) {
    const userId = getUserId(ctx);
    const aptUser = await ctx.prisma.apartment({ id: args.id }).user();
    if (aptUser.id != userId) {
      throw new Error("Error, tried to remove someone else's apartment");
    };

    // clean up apartment place if any
      const apartmentPlaces = await ctx.prisma.places({
        where: { apartment: { id: args.id } }
      });
      const apartmentPlacesIds = apartmentPlaces.map(place => place.id);
      await ctx.prisma.deleteManyPlaces({ id_in: apartmentPlacesIds });

    // delete apartment
    return ctx.prisma.deleteApartment({ id: args.id });
  },
  
};

import { Query } from "./Query";
import Relations from "./Relations";
import { auth } from "./Mutation/auth";
import { apartment } from "./Mutation/apartment";
import { place } from "./Mutation/place";

const resolvers = {
  Query,
  ...Relations,
  Mutation: {
    ...auth,
    ...apartment,
    ...place
  },
};

export default resolvers;

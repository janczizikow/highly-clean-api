import { Query } from "./Query";
import { auth } from "./Mutation/auth";
import { apartment } from "./Mutation/apartment";
import { place } from "./Mutation/place";

const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...apartment,
    ...place
  }
};

export default resolvers;

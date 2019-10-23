import {
  Resolvers,
  QueryResolvers,
  User
} from "../../../graphql/generated/server";

export const queryResolvers: QueryResolvers = {
  user: (parent, args, context, info): User => {
    console.log(parent, args, context, info);
    const user: User = {
      id: "1",
      name: "poyo"
    };
    return user;
  }
};

export const resolvers: Resolvers = {
  Query: queryResolvers
};

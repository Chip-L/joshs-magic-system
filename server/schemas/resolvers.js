const { AuthenticationError } = require("apollo-server-errors");
const { signToken } = require("../utils/auth");
const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    users: async (_, args) => {
      return await User.find(args);
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPwd = await user.isCorrectPassword(password);

      if (!correctPwd) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (_, args) => {
      console.log(args);
      let user, token;
      try {
        user = await User.create(args);
        token = signToken(user);
      } catch (error) {
        console.log("error reached:");
        if (error.code === 11000) {
          console.log("error:", "user already exists");
          throw new AuthenticationError("User already exists");
        }
        console.log("error:", error);
      }

      console.log("user:", user);
      return { token, user };
    },
  },

  // updateUser: async (_, args, context) => {
  //   if (context.user) {
  //     return await User.findByIdAndUpdate(context.user._id, args, {
  //       new: true,
  //     });
  //   }

  //   throw new AuthenticationError("Not logged in");
  // },
};

module.exports = resolvers;

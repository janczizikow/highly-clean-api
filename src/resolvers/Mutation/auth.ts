import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context, validateEmail } from "../../utils";

export const auth = {
  async signup(parent, args, ctx: Context) {
    const { email, password, name } = args;

    if (!email || !password || !name) {
      throw new Error("Fields cannot be empty");
    }

    const hasValidEmail = validateEmail(email);

    if (!hasValidEmail) {
      throw new Error(`${email} is not a valid email`);
    }

    const paswordDigest = await bcrypt.hash(args.password, 10);
    const user = await ctx.prisma.createUser({
      ...args,
      password: paswordDigest
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  },

  async login(parent, { email, password }, ctx: Context) {
    const user = await ctx.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    };
  }
};

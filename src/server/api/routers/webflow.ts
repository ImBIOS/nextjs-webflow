import Webflow from "webflow-api";

import { createTRPCRouter } from "~/server/api/trpc";

const { CLIENT_ID } = process.env;
const webflow = new Webflow();

export const webflowRouter = createTRPCRouter({
  // authorize: publicProcedure.query(({ input }) => {
  //   const redirectUrl = webflow.authorizeUrl({
  //     client_id: CLIENT_ID as string,
  //   });
  //   return {
  //     greeting: `Hello ${input.text}`,
  //   };
  // }),
  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});

// export const appRouter = t.router({
//   postById: t.procedure.input(String).query(async ({ input, ctx }) => {
//     const post = await ctx.post.findUnique({
//       where: { id: input },
//     });
//     return post;
//   }),
//   relatedPosts: t.procedure.input(String).query(async ({ input, ctx }) => {
//     const posts = await ctx.findRelatedPostsById(input);
//     return posts;
//   }),
// });

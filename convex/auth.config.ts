// eslint-disable-next-line import/no-anonymous-default-export
export default {
  providers: [
    {
      domain: process.env.VITE_CLERK_FRONTEND_API_URL,
      applicationID: "convex",
    },
  ],
};

import { rest } from "msw";

export const handlers = [
  rest.get("https://api.github.com/orgs/godaddy/repos", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "test",
          id: "123",
        },
        { name: "test2", id: "456" },
      ])
    );
  }),
];

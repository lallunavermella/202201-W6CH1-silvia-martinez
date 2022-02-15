import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "sleep all day",
        },
        {
          id: 2,
          name: "sleep in the sofa",
        },
        {
          id: 3,
          name: "scratch the sofa",
        },
      ])
    );
  }),
  rest.delete(`process.env.REACT_APP_API_URL/${2}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
  rest.delete(`process.env.REACT_APP_API_URL/${10}`, (req, res, ctx) =>
    res(ctx.status(404), ctx.json({}))
  ),
];

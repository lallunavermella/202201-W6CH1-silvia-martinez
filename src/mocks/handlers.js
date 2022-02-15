import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "sleep all day",
          done: true,
        },
        {
          id: 2,
          name: "sleep",
          done: false,
        },
      ])
    );
  }),
];

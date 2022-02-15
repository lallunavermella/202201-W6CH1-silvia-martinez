import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "task1",
        },
        {
          id: 2,
          name: "task2",
        },
        {
          id: 3,
          name: "task3",
        },
      ])
    );
  }),
  rest.delete(`${process.env.REACT_APP_API_URL}/2`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
  rest.delete(`${process.env.REACT_APP_API_URL}/10`, (req, res, ctx) =>
    res(ctx.status(404), ctx.json({}))
  ),
];

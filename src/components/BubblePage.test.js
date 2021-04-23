import {
  act,
  cleanup,
  getByText,
  render,
  waitFor,
} from "@testing-library/react";

import BubblePage from "./BubblePage";
import React from "react";
import axios from "axios";

const data = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
];

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: [...data] }));
});

afterEach(cleanup);

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  await act(async () => {
    const { getByText } = render(<BubblePage colorList={data} />);
    await waitFor(() => getByText(/bubble page/i));
  });
});

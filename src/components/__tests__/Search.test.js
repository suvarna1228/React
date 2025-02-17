import { render,screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/MockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should render the body component with search", async()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
           <Body/>
        </BrowserRouter>)
    });
  const searchBtn = screen.getByRole("button",{name:/Search/i});
  console.log(searchBtn);
  expect(searchBtn).toBeInTheDocument();
});





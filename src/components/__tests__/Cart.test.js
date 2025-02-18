import { fireEvent, render ,screen} from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurentMenu";
import AppStore from "../../utils/AppStore";
import MOCK_DATA from "../mocks/MockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";


global.fetch=jest.fn(()=>
     Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA),
        
    })
);


it("should Load Restaurant Menu Component and Display Food Items", async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            <RestaurantMenu/>
            <Cart/>
            </Provider>
            </BrowserRouter>
       
    ));

    const accordionHeader=screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    expect(screen.getByText(/cart/i)).toBeInTheDocument();


    const addBtns=screen.getAllByRole("button",{name:"Add"});
    fireEvent.click(addBtns[0]);

    //  expect(screen.getAllByTestId("foodItems")).toBo(0);
    //  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    // expect(screen.getByText("cart -(1 items)")).toBeInTheDocument();
});
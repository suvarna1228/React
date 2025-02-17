import { fireEvent, render,screen } from "@testing-library/react";
import AppStore from "../../utils/AppStore.js"; 
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";



it("should render header componet with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
  
);

const loginButton =screen.getByRole("button");

expect(loginButton).toBeInTheDocument();
});


it("should render header componet with a card item ",()=>{
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
  
);

const cartItems =screen.getByText(/cart/i);

expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
  
);

const loginButton =screen.getByRole("button",{name:"Login"});
fireEvent.click(loginButton);
const logoutButton=screen.getByRole('button',{name:"Logout"});

expect(logoutButton).toBeInTheDocument();
});
import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import Mock_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", ()=>{
    render(<RestaurantCard resData={Mock_DATA}/>);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();

});
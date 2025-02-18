import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases",()=>{

   beforeAll(()=>{
      console.log("Before All");
   })
   beforeEach(()=>{
      console.log("Before each");
   })

   it('should load contact us component', () => { 
      render(<Contact/>);
      const heading = screen.getByRole("heading");
  
      expect(heading).toBeInTheDocument();
   });
  
   it('should load button inside  contact us component', () => { 
      render(<Contact/>);
  
      const button = screen.getByRole("button");
  
      expect(button).toBeInTheDocument();
   });
  
  it('should load input name  inside  contact us component', () => { 
     render(<Contact/>);
  
      const inputName = screen.getByPlaceholderText("name");
  
      expect(inputName).toBeInTheDocument();
   });
  
   it('should load 2 input boxes inside  contact us component', () => { 
     render(<Contact/>);
  
     const inputBoxes = screen.getAllByRole("textbox");
  
     expect(inputBoxes.length).toBe(2);
  });
  
});
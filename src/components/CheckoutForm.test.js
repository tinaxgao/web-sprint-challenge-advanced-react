import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstname = screen.getByLabelText(/First Name/i);
    userEvent.type(firstname, "firstname");

    const lastname = screen.getByLabelText(/Last Name/i);
    userEvent.type(lastname, "lastname");

    const address = screen.getByLabelText(/Address/i);
    userEvent.type(address, "123 address");

    const city = screen.getByLabelText(/City/i);
    userEvent.type(city, "city");

    const state = screen.getByLabelText(/State/i);
    userEvent.type(state, "state");

    const zip = screen.getByLabelText(/Zip/i);
    userEvent.type(zip, "12345");

    const checkoutBtn = screen.getByRole("button");
    userEvent.click(checkoutBtn);

    const success = screen.getByText("You have ordered some plants! Woo-hoo!");
    const details = screen.getByText("city, state 12345");
    expect(success).toBeInTheDocument();
    expect(details).toBeInTheDocument();
});

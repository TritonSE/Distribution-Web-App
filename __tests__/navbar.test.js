import React from 'react';
import { BrowserRouter } from "react-router-dom"; 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar/Navbar'
import "@testing-library/jest-dom/extend-expect";

const links = [
    { text: 'Home', location: "/" },
    { text: 'Agency', location: "/agency" },
];

// Use test.each to iterate the test cases above
test.each(links)(
    "Check if Nav Bar have %s link.",
    (link) => {
      render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>);
      const linkDom = screen.getByText(link.text);
      expect(linkDom).toHaveAttribute("href", link.location);
    }
);
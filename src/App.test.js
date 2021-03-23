import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

import HeroSection from "./components/HeroSection";
import CreateEvent from "./components/CreateEvent";
import PointsInfo from "./components/PointsInfo";
import JoinInfo from "./components/JoinInfo";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("HeroSection Component Testing", () => {
  it("Renders Welcome Title", () => {
    act(() => {
      ReactDOM.render(<HeroSection />, rootContainer);
    });
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("WELCOME!");
  })});

  describe("CreateEvent Component Testing", () => {
    it("Renders Add New Event Title", () => {
      act(() => {
        ReactDOM.render(<CreateEvent />, rootContainer);
      });
      const h2 = rootContainer.querySelector("h2");
      expect(h2.textContent).to.equal("ADD NEW EVENT");
    })});

    describe("PointsInfo Component Testing", () => {
      it("Renders Check Current Standing Title", () => {
        act(() => {
          ReactDOM.render(<PointsInfo />, rootContainer);
        });
        const h2 = rootContainer.querySelector("h2");
        expect(h2.textContent).to.equal("CHECK YOUR CURRENT STANDING");
      })});

  describe("JoinInfo Component Testing", () => {
    it("Renders Join Us Title", () => {
      act(() => {
        ReactDOM.render(<JoinInfo />, rootContainer);
      });
      const h1 = rootContainer.querySelector("h1");
      expect(h1.textContent).to.equal("JOIN US!");
    })});
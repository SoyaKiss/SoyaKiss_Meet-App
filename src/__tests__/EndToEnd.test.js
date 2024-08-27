import React from "react";
import "@testing-library/jest-dom";
import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(async () => {
    await browser.close();
  });

  test("An event element is collapsed by default", async () => {
    await page.waitForTimeout(1000);
    const eventDetails = await page.$(".event .event-details");
    console.log("Event Details:", eventDetails);
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .event-details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .event-details");
    expect(eventDetails).toBeNull();
  });
});

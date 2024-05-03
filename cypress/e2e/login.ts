import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "./page/login-page";
import { dashboardPage } from "./page/dashboard-page";

When("I visit login page", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

Then("Fill valid credentials", () => {
  console.log(Cypress.env());
  cy.get(loginPage.email).clear().type(Cypress.env('USERNAME'));
  cy.get(loginPage.password).clear().type(Cypress.env('PASSWORD'));
});

Then("Can login", () => {
  cy.get(loginPage.submitButton).click();
  cy.get(dashboardPage.pageTitle).should(
    "have.text",
    "Dashboard"
  );
});

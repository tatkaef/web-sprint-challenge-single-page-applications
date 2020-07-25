describe("Name Test", function () {
  it("Explain what it does and can add text to the box", function () {
    // actions and assertions go here
    cy.visit("http://localhost:3000");
    cy.visit("http://localhost:3000/pizza");
    cy.get(".inputone").type("Vasya").should("have.value", "Vasya");
  });

  it("can select multiple toppings", () => {
    cy.get('input[name="pepperoni"]').check().should("be.checked");
    cy.get('input[name="sausage"]').check().should("be.checked");
    cy.get('input[name="grilledChicken"]').check().should("be.checked");
    cy.get('input[name="onions"]').check().should("be.checked");
  });
  it("can Submit the form", () => {
    cy.get(".submit").click();
  });
});

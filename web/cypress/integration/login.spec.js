describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("login test", () => {
      it("displays page header", () => {
        cy.get("span").contains("Mr.Care Your Health Assistant");
      });
    })
  })
describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("login test", () => {
      it("displays page header", () => {
        cy.get("span").contains("Mr.Care Your Health Assistant");
      });
    })
    describe("login jump test", () => {
        it("shoule displays homepage ", () => {
            let username = "20091579@mail.ie"
            let password = "qhyqhy123"
            cy.get("input[id=basic_username]").clear().type(username);
            cy.get("input[id=basic_password]").clear().type(password);
            cy.get("button").click();
            cy.url().should("include", `http://localhost:3000/#/home`);
        });
      })
  })
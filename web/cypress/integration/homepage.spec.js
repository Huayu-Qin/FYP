describe("Homepage Page", () => {
    beforeEach(() => {
        cy.visit("/");
        let username = "20091579@mail.ie"
        let password = "qhyqhy123"
        cy.get("input[id=basic_username]").clear().type(username);
        cy.get("input[id=basic_password]").clear().type(password);
        cy.get("button").click();

    });
    describe("Homepage layout", () => {
        it("shoule displays Health Care Center ", () => {
            cy.get('div[style="padding-left: 24px;"]').children('span').should("contain","Health Care Center")
        });
      })
})
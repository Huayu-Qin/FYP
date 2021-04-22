describe("Homepage Page", () => {
    beforeEach(() => {
        cy.visit("/");
        let username = "20091579@mail.ie"
        let password = "qhyqhy123"
        cy.get("input[id=basic_username]").clear().type(username);
        cy.get("input[id=basic_password]").clear().type(password);
        cy.get("button").click();

    });
    describe("bodyhealthpage layout", () => {
        it("shoule displays Health Data ", () => {
            cy.get('#sub1')
            cy.get('[id^=sub1]')
            cy.get('li[id=BodyHealth]').contains('Body Health').click()
            cy.get('.ant-page-header-heading-title').contains('Health Data')
        });
    })

})
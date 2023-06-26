describe('View Timesheet', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/view');
      cy.get("#username").type('john.doe@example.com');
      cy.get('#password').type('password123');
      cy.get('button').click();
    });

    it("should be able to see timesheets for selected date", () => {
        cy.get('input[placeholder="MM/DD/YYYY"]').type('06/01/2023');
        cy.get('table>tbody').find('tr').should('have.length.greaterThan', 0 );
    })
});
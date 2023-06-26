describe('Post Timesheet', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get("#username").type('john.doe@example.com');
    cy.get('#password').type('password123');
    cy.get('button').click();
  });

  it('should be able to see error validation messages for form elements',() => {
    cy.get("input[id='description']").type('week 1');
    cy.get("input[id='rate-field']").type('70');
    cy.get('form').within(($form) => {
      cy.root().submit();
    })
    cy.contains('Enter date in correct format');
    cy.contains('Enter time in minutes')
  });

  it('should be able to submit form data', () => {
    cy.get("input[id='description']").type('week 1');
    cy.get("input[id='rate-field']").type('70');
    cy.get('form').within(($form) => {
      cy.get('input[placeholder="MM/DD/YYYY"]').type("06/25/2023")
      cy.get('input[placeholder="mm"]').type("45")
      cy.get('button[aria-label="add"]').click().wait(1000);
      cy.get('input[placeholder="MM/DD/YYYY"]').eq(1).type("06/20/2023")
      cy.get('input[placeholder="mm"]').eq(1).type("30")
      cy.root().submit();
    });
    cy.contains('Timesheet saved successfully')
  })  

  it('should display total time and total cost', () => {
    cy.get("input[id='rate-field']").type('10');
    cy.get('form').within(($form) => {
      cy.get('input[placeholder="MM/DD/YYYY"]').type("06/25/2023")
      cy.get('input[placeholder="mm"]').type("2");
    });
    cy.contains('Total Time: 2');
    cy.contains('Total Cost: 20');
  })
})
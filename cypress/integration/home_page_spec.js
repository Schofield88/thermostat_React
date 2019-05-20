describe('Home page', () => {

  it('successfully loads the home page', () => {
      cy.visit('/');
  });

  it('clicks the down button', () => {
    cy.visit('/');
    cy.get('[data-cy=down]').click();
    cy.document().contains('19');
  });

  it('clicks the up button', () => {
    cy.visit('/');
    cy.get('[data-cy=up]').click();
    cy.document().contains('21');
  });
});

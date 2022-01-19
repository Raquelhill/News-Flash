describe('Home View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should have an h1 that displays the title of the page', () => {
    cy.get('h1').contains('News Flash');
  });
  it('Should display a HOME button', () => {
    cy.get('button').contains('Home');
  });
});

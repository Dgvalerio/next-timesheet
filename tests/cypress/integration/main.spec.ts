const { baseUrl } = Cypress.config();
const mountUrl = (value: string) => `${baseUrl}${value}`;

describe('Main', () => {
  it('should go to Home page', () => {
    cy.visit('/');

    cy.url().should('eq', mountUrl(`/`));

    cy.get('h1').contains('Home Page');
  });

  it('should go to SignIn page', () => {
    cy.visit('/signin');

    cy.url().should('eq', mountUrl(`/signin`));

    cy.get('h1').contains('SignIn Page');
  });
});

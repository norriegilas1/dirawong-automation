/* 
// cypress/support/index.js
Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('iframe[data-cy="the-frame"]')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  })
  // cypress/integration/custom-command-spec.js
  it('gets the post using custom command', () => {
    cy.visit('index.html')
    cy.getIframeBody()
      .find('#run-button').should('have.text', 'Try it').click()
    cy.getIframeBody()
      .find('#result').should('include.text', '"delectus aut autem"')
  })
 */
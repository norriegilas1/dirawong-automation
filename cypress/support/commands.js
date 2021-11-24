
Cypress.Commands.add('login', (uname, pword) => {

    cy.visit('https://cloud-one.dirawong.com/DIM/#main')

    cy.get('#loginEmail-inputEl').type(uname)

    cy.get('#loginPassword-inputEl').type(pword)

    cy.get('.x-btn-inner.x-btn-inner-default-small').click({ force: true })


})

Cypress.Commands.add('idp', () => {

    cy.visit('https://www.idp.com/newzealand/')

    cy.title().should('eq', 'Education Agent - Study and Visa Options in New Zealand | IDP New Zealand')

    cy.get(".glyphicon.glyphicon-comment.chat-bub").click({force : true})

})



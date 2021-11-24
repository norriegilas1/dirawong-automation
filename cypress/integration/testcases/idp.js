import HomePage from '../pages/homepage'

describe('IDP New Zealand UI Test', () => {
  it('Chat an Agent', () => {

    const hp = new HomePage()

    hp.visit()

    cy.get(".glyphicon.glyphicon-comment.chat-bub").click({ force: true })


  })

  it('Book an Appointment', () => {

    const hp = new HomePage()

    hp.visit()

    cy.get(".glyphicon.glyphicon-comment.chat-bub").click({ force: true })


  })

  it('Call Us', () => {

    const hp = new HomePage()

    hp.visit()

    cy.get(".glyphicon.glyphicon-comment.chat-bub").click({ force: true })


  })

}
)


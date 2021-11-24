class LoginPage {

    visit() {
        cy.visit('https://cloud-one.dirawong.com/TSADIM/#main')
        cy.title().should('eq', 'TSA DIM')
    }

    enterEmail(value){
        const field = cy.get('#loginEmail-inputEl')
        field.clear()
        field.type(value)
        return this
    }

    enterPassword(value){
        const field = cy.get('#loginPassword-inputEl')
        field.clear()
        field.type(value)
        return this
    }

    login(){
        cy.get('.x-btn-inner.x-btn-inner-default-small').click()
    }

}

export default LoginPage
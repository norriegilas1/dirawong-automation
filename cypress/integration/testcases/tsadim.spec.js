import LoginPage from '../pages/loginpage'
import HomePage from '../pages/homepage'

describe('TSADIM UI Regression Tests', () => {

  const lp = new LoginPage
  const hp = new HomePage
  
  it('TSADIM-001-Login_Admin', () => {


    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()
    //Assert Dashboard
    cy.get('.panel-text.panel-header').should(
      "have.text",
      "Results Dashboard"
    );

  })

  it('TSADIM-002-Login_Manager', () => {

    lp.visit()
    lp.enterEmail('qatani@robot-mail.com')
    lp.enterPassword('Test_1234')
    lp.login()
    //Assert Dashboard Tab
    cy.get('.panel-text.panel-header').should(
      "have.text",
      "Results Dashboard"
    );
    //Assert User Module is Disabled
    cy.get('[data-componentid="ext-treelistitem-6"]').should(
      "have.class",
      "x-treelist-row-disabled"
    );

  })

  it('TSADIM-003-Login_Tester', () => {

    lp.visit()
    lp.enterEmail('mypixo@robot-mail.com')
    lp.enterPassword('Tester_123')
    lp.login()
    //Assert Dashboard
    cy.get('.panel-text.panel-header').should(
      "have.text",
      "Results Dashboard"
    );
    //Assert User Module is Disabled
    cy.get('[data-componentid="ext-treelistitem-6"]').should(
      "have.class",
      "x-treelist-row-disabled"
    );
  })

  it('TSADIM-004-Login_Not_Registered_Email', () => {

    lp.visit()
    lp.enterEmail('test@test.com')
    lp.enterPassword('test')
    lp.login()

  })

  it('TSADIM-005-Login_Disabled_Account', () => {

    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()

  })

  it('TSADIM-006-Login_Forgot_Password', () => {

    lp.visit()
    

  })

  it('TSADIM-007-Dashboard_Loaded', () => {

    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()
    //Assert Dashboard Tab
    cy.get('#ivrtestingoverview .panel-header').should("have.text","Interaction Rule Testing");
    cy.get('#reportingdatastructure .panel-header').should("have.text","Reporting Data Structure");
    cy.get('#platformvolumeoverview .panel-header').should("have.text","Volumes Testing");
    cy.get('#platformvaluesoverview .panel-header').should("have.text","Values Testing");

  })

  it('TSADIM-008-Dashboard_Interaction_Rules_Testing_Toggle_View', () => {

    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()
    
  })

  it('TSADIM-009-Dashboard_Interaction_Rules_Testing_Toggle_View_Trends', () => {

    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()
    
  })

  it('TSADIM-010-Dashboard_Interaction_Rules_Testing_Test_Job_Name_Is_Clicked', () => {

    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()

    cy.get('#IvrTestingSummaryView-body .panel-text.panel-header').should("have.text","Interaction Rule Testing Results Summary");
    
  })

  it.only('TSADIM-011-Dashboard_Reporting_Data_Structure_View_Results', () => {

    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()
    cy.get('#reportingdatastructure-body .x-btn-inner-default-small').click()
    //Reporting Data Structure Test Results Opened
    cy.get('.x-tab-active .x-tab-inner-default').should("have.text","Test Result Details - Reporting Data Structure");
    
  })

  it.only('TSADIM-012-Dashboard_Volumes_Testing_View_Trends', () => {

    lp.visit()
    lp.enterEmail('admin@dirawong.com')
    lp.enterPassword('Temp1234!')
    lp.login()
    cy.get('#button-1050-btnInnerEl').click()
    //Reporting Data Structure Test Results Opened
    cy.get('.x-tab-active .x-tab-inner-default').should("have.text","Test Result Details - Reporting Data Structure");
    
  })
  

})
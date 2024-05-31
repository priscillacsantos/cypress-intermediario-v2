/// <reference types="Cypress" />

describe('Logout', () => {

    beforeEach (() => { //antes de cada it, ele é executado
        cy.login();
        cy.visit('/')
    })
    it('successfully', () => {
      cy.logout();
      cy.get('[data-qa-selector="sign_in_tab"]').should('exist')
      //outra forma de verificar: cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })
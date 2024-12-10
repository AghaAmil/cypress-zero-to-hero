/// <reference types="cypress" />

describe('First Test Suite', () => {

  it('First Test', () => {

    // Navigate to intended page
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()


    // by Tag name
    cy.get('input')

    // by ID
    cy.get('#inputEmail1')

    // by Class value
    cy.get('.input-full-width')


    // by Attribute name
    cy.get('[fullwidth]')

    // by Attribute and value
    cy.get('[placeholder="Email"]')

    // by entire Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    // by two Attribute
    cy.get('[placeholder="Email"][fullwidth]')

    // by Tag, Attribute, ID, Class
    cy.get('input#inputEmail1[placeholder="Email"][class="input-full-width size-medium shape-rectangle"]')

    // by Cypress Test ID
    cy.get('[data-cy="imputEmail1"]')
  })

  it('Second Test', () => {
    // Navigate to intended page
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // Theory
    // get() -- finds elements on the page by locator globally
    // find() -- finds child element by locator
    // contains() -- finds HTML text, by text, and locator

    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').contains('Sign in')
    cy.contains('nb-card', 'Horizontal form').get('button')         // get all buttons

    // cypress chains and DOM
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()

  })

})

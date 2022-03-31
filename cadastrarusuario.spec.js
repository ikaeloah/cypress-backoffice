/// <reference types="cypress" />

describe('Cadastro de cliente', () => {
it('Visitar a página e fazer login', () => {
    cy.visit('https://workspace-stage.testfy.com.br/login')

    cy.get('#username').type('admin@tfy.com.br')
    cy.get('#username').should('have.value', 'admin@tfy.com.br')
    cy.get('#password').type('admin')
    cy.get('.css-kaj3hw > .chakra-button').click()
    cy.get('.chakra-toast > .chakra-toast__inner > #\\31').should('exist')
    cy.get('.chakra-toast > .chakra-toast__inner > #\\31').should('contain', 'Sucesso')

})

it('Abrir página de cadastro e preencher dados', () => {
    cy.get('.css-1ib6dzo > :nth-child(4) > .css-46p1lt > :nth-child(1) > a > .chakra-stack > .css-gh1il6').click()
    cy.get('#menu-button-25').click()
    cy.get('#menu-list-25-menuitem-69').click()

    cy.get('#name').type('Perfil Backoffice QA')
    cy.get('#name').should('have.value', 'Perfil Backoffice QA')

    cy.get('#email').type('ika@hubxp.com.br')
    cy.get('#email').should('have.value', 'ika@hubxp.com.br')

    cy.get('#phoneNumber').type('11977883399')
    cy.get('#phoneNumber').should('have.value', '(11) 9 7788-3399')

    cy.get('#documentNumber').type('05746537322')
    cy.get('#documentNumber').should('have.value', '057.465.373-22')

    cy.get('#birthdate').type('20/04/1994')
    cy.get('#birthdate').should('have.value', '20/04/1994')
    cy.get('.css-j0flcn').click()

    cy.get(':nth-child(2) > .chakra-radio__control').click()

    cy.get('.css-19fzkxm').click()

    cy.get('.chakra-toast > .chakra-toast__inner > #\\32').should('exist')
    cy.get('.chakra-toast > .chakra-toast__inner > #\\32').should('contain', 'Sucesso')





})
})
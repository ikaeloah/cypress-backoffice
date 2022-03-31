/// <reference types="cypress" />

describe('Testes básicos', () => {
    it('Visitar e confirmar título', () => {
        cy.visit('https://workspace-stage.testfy.com.br/login')
        cy.title().should('be.equal', 'Testfy • Backoffice')
    })


    it('Visitar a página e fazer login', () => {
        cy.visit('https://workspace-stage.testfy.com.br/login')

        cy.get('#username').type('admin@tfy.com.br')
        cy.get('#username').should('have.value', 'admin@tfy.com.br')
        cy.get('#password').type('admin')
        cy.get('.css-kaj3hw > .chakra-button').click()
        cy.get('.chakra-toast > .chakra-toast__inner > #\\31').should('exist')
        cy.get('.chakra-toast > .chakra-toast__inner > #\\31').should('contain', 'Sucesso')

    })

    it('Cadastrar cliente', () => {
        cy.get(':nth-child(4) > .css-46p1lt > :nth-child(3) > a > .chakra-stack > .css-gh1il6').click()

        cy.get('[href="/clients/new"]').click()

        cy.get('#name').type('Cliente teste')
        cy.get('#name').should('have.value', 'Cliente teste')

        cy.get('#socialName').type('teste')
        cy.get('#socialName').should('have.value', 'teste')

        cy.get('#email').type('eloahika@gmail.com')
        cy.get('#email').should('have.value', 'eloahika@gmail.com')

        cy.get('#phoneNumber').type('11977883399')
        cy.get('#phoneNumber').should('have.value', '(11) 9 7788-3399')

        cy.get('#documentNumber').type('05746537322')
        cy.get('#documentNumber').should('have.value', '057.465.373-22')

        cy.get('#birthdate').type('20/04/1994')
        cy.get('#birthdate').should('have.value', '20/04/1994')
        cy.get('.css-j0flcn').click()

        cy.get(':nth-child(2) > .chakra-radio__control').click()

        cy.get('.css-19fzkxm').click()

    })

    it('Editar cliente', () => {
        cy.get('#search').type('eloahika')
        cy.get('.css-xr3iot > :nth-child(3)').should('not.exist')
        cy.get('.css-xr3iot > :nth-child(3)').click()
        cy.get('.css-xr3iot > :nth-child(3)').should('not.exist')
        cy.get('.css-xr3iot > :nth-child(3)').should('exist')

        cy.get('#name').click().type('Cliente teste editado')

        cy.get('.css-19fzkxm').click()
        })
})
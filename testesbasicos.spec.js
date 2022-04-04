// <reference types="cypress" />

describe('Testes básicos', () => {

    it('Visitar a página e fazer login', () => {
        cy.visit('https://workspace-stage.testfy.com.br/login')
    
        cy.get('#username').type('admin@tfy.com.br')
        cy.get('#username').should('have.value', 'admin@tfy.com.br')
        cy.get('#password').type('admin')
        cy.get('.css-kaj3hw > .chakra-button').click()
        cy.get('.chakra-toast > .chakra-toast__inner > #\\31').should('exist')
        cy.get('.chakra-toast > .chakra-toast__inner > #\\31').should('contain', 'Sucesso')

    })

    it('Clicar no cliente e inserir novo pedido', () => {
        cy.get(':nth-child(4) > .css-46p1lt > :nth-child(3) > a > .chakra-stack > .css-gh1il6').click()
        cy.get(':nth-child(1) > :nth-child(1) > .chakra-text').click()
        cy.get('#socialName').type('Ika')
        cy.get('#socialName').should('have.value', 'Ika')
        cy.get('.css-1n2aeot > .chakra-button').click()
    })

    it('Categoria de Venda', () => {
        cy.get(':nth-child(5) > a > .chakra-stack > .css-gh1il6').click()
        cy.get('.css-y1184 > .chakra-button__group > .chakra-button').click()
            cy.get('#name').type('Categoria de teste')
            cy.get('#name').should('have.value', 'Categoria de teste')
            cy.get('.css-19fzkxm').click()
    })

    it('Análises Laboratoriais', () => {
        cy.get(':nth-child(3) > .css-46p1lt > :nth-child(2) > a > .chakra-stack > .css-gh1il6').click()
        cy.get('.css-y1184 > .chakra-button__group > .chakra-button').click()
        cy.get('#name').type('Ika')
        cy.get('#name').should('have.value', 'Ika')
        cy.get('#medicalReportDeliveryEstimateInDays').type('20')
        cy.get('#medicalReportDeliveryEstimateInDays').should('have.value', '20')
        cy.get('#description').type('Essa análise é um teste e logo será excluída')
        cy.get('#description').should('have.value', 'Essa análise é um teste e logo será excluída')


    })

    it('Influencers', () => {
        cy.get(':nth-child(2) > .css-46p1lt > :nth-child(2) > a > .chakra-stack > .css-gh1il6').click()
            cy.get('.css-y1184 > .chakra-button__group > .chakra-button').click()
            cy.get('#name').type('Ika')
            cy.get('#name').should('have.value', 'Ika')
            cy.get('#email').type('i.kaeloah@gmail.com')
            cy.get('#email').should('have.value', 'i.kaeloah@gmail.com')
            cy.get('#phoneNumber').type('5511977883399')
            cy.get('#phoneNumber').should('have.value', '+55 (11) 9 7788-3399')
            cy.get(':nth-child(2) > .chakra-radio__control').click()
            cy.get('#birthdate').type('20/04/1994')
            cy.get('#birthdate').should('have.value', '20/04/1994')
            cy.get('.css-19fzkxm').click()
    })
    })

    // it('Pedidos', () => {
    //     cy.get(':nth-child(5) > .css-46p1lt > :nth-child(2) > a > .chakra-stack > .css-gh1il6').click()
    //     cy.get('.css-y1184 > .chakra-button__group > .chakra-button').click()
    //     cy.get('#menu-list-172-menuitem-174').click()

    // })

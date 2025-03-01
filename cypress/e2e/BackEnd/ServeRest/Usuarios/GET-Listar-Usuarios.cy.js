/// <reference types="cypress" />

describe('Listar Usuários', () => {

    it('Deve listar todos os usuários', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
            headers: {
                accept: 'application/json',
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)

        })

    })
})
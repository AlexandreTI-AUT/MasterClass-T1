/// <reference types="cypress" />

describe('Listar Usuários', () => {

    it('Deve listar usuários por id', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios/Uv6KOMJNwK9YqQHE',
            headers: {
                accept: 'application/json',
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('nome', 'Fulano da Silva')
            expect(response.body).to.have.property('email', 'fulano@qa.com')
            expect(response.body).to.have.property('administrador', 'true')
            expect(response.body).to.have.property('password', 'teste')


        })

    })
})
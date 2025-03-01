/// <reference types="cypress" />

describe('Cadastrar Usuário', () => {

    it('Deve cadastrar um novo usuário', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                nome: 'João da Silva',
                email: 't5@gamil.com',
                password: '123456',
                administrador: 'true'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(response.body).to.have.property('_id')

        })
    })

    it('Deve retornar erro ao cadastrar usuário com email já existente', () => {
    })


})
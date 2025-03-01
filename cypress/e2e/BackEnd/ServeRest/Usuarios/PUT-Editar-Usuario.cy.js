/// <reference types="cypress" />

describe('Editar Usuário', () => {

    it('Deve editar um usuário', () => {
        cy.request({
            method: 'PUT',
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                nome: 'João da Silva',
                email: 't6@gamil.com',
                password: '123456',
                administrador: 'true'

            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message', 'Registro alterado com sucesso')
        })
    })
})

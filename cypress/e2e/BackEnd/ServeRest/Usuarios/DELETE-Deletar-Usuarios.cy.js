/// <reference types="cypress" />

describe('Deletar Usuário', () => {

    it('Deve deeltar um usuário', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://serverest.dev/usuarios/QSXY1kgGqdBX0ygu',
            headers: {
                accept: 'application/json',

            },
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message', 'Registro excluído com sucesso')
        })
    })
})

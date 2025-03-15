/// <reference types="cypress" />

describe('Listar Usuários', () => {

    it('Deve listar usuários por id', () => {

        cy.criarUsuario().then((createResponse) => {
            const userId = createResponse.body._id

            cy.listarUsuariosId(userId).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('_id', userId)
            })
        })


    })
})
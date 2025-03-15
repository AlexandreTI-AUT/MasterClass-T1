/// <reference types="cypress" />

describe('Listar Usuários', () => {

    it('Deve listar todos os usuários', () => {
        cy.listarUsuarios().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body.usuarios).to.be.an('array')

            cy.wrap(response.body.usuarios).as('listaUsuarios')
        })

    })

    it('Deve validar a estrutura de dados dos usuários', () => {
        cy.listarUsuarios().then((response) => {
            expect(response.status).to.eq(200)
            const firstUser = response.body.usuarios[0]
            expect(firstUser).to.have.property('nome')
            expect(firstUser).to.have.property('email')
            expect(firstUser).to.have.property('password')
            expect(firstUser).to.have.property('administrador')
            expect(firstUser).to.have.property('_id')

        })

    })

    it('Deve validar se o campos não estão vazios', () => {


    })

    it('validar o total de usuarios', () => {
        cy.listarUsuarios().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quantidade).to.equal(response.body.usuarios.length)


        })

    })
})
import { faker } from "@faker-js/faker/locale/pt_BR";

Cypress.Commands.add(
    'preencherFormulario',
    ({
        nome,
        email,
        telefone,
        dataNascimento,
        comentario,
        senha,
        genero,
        aceitarTermo,
    } = {}) => {
        cy.get('[data-testid="input-nome"]').clear().type(nome ?? faker.person.fullName());
        cy.get('[data-testid="input-email"]').clear().type(email ?? faker.internet.email());
        cy.get('[data-testid="input-telefone"]').clear().type(telefone ?? faker.helpers.replaceSymbols('##9########'));
        cy.get('[data-testid="input-nascimento"]').clear().type(
            dataNascimento ?? faker.date.birthdate({ min: 13, max: 100, mode: 'age' }).toLocaleDateString('pt-BR').replace(/\//g, '')
        );

        genero && cy.get(`.genero-opcoes input[value="${genero}"]`).click();

        cy.get('[data-testid="input-comentario"]').clear().type(comentario ?? faker.lorem.sentence());
        cy.get('[data-testid="input-senha"]').clear().type(senha ?? faker.internet.password(8), { log: false });


        aceitarTermo && cy.get('.checkbox-label > input').click();

        cy.get('[data-testid="btn-submit"]').click();
    }
);

Cypress.Commands.add('criarUsuario', (userData = null) => {
    const data = userData || {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: faker.datatype.boolean().toString()

    }

    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/usuarios`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data,
        failOnStatusCode: false

    });

})





import { faker } from "@faker-js/faker/locale/pt_BR";

Cypress.Commands.add('preencherFormulario', (nome = faker.person.fullName()) => {
    const telefone = faker.helpers.replaceSymbols('##9########');
    const dataNascimento = faker.date.birthdate({ min: 13, max: 100, mode: 'age' }).toLocaleDateString('pt-BR').replace(/\//g, '');

    cy.get('[data-testid="input-nome"]').type(nome || '{selectall}{backspace}');
    cy.get('[data-testid="input-email"]').type(faker.internet.email());
    cy.get('[data-testid="input-telefone"]').type(telefone);
    cy.get('[data-testid="input-nascimento"]').type(dataNascimento);
    cy.get('.genero-opcoes > :nth-child(1) > input').click();
    cy.get('[data-testid="input-comentario"]').type(faker.lorem.sentence());
    cy.get('[data-testid="input-senha"]').type(faker.internet.password(8));
    cy.get('.checkbox-label > input').click();
    cy.get('[data-testid="btn-submit"]').click();

})


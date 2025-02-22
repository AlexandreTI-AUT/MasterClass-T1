/// <reference types="cypress" />



describe('Criar Conta', () => {
    beforeEach(() => {
        cy.visit('formulario-cadastro/');
    })

    it('Deve preencher o Formulário com sucesso', () => {
        cy.preencherFormulario();

        cy.get('.success-message').should('have.text', '✅ Cadastro realizado com sucesso!');
    });

    it('Campo nome deve ser obrigatório', () => {
        cy.preencherFormulario('');
        cy.get('.error-message').should('contain', 'Nome é obrigatório');
    });


    // it('Campo email deve ser obrigatório', () => {

    //     cy.get('[data-testid="input-nome"]').type('João da Silva');
    //     cy.get('[data-testid="input-telefone"]').type('11999999999');
    //     cy.get('[data-testid="input-nascimento"]').type('10011990');
    //     cy.get('.genero-opcoes > :nth-child(1) > input').click();
    //     cy.get('[data-testid="input-comentario"]').type('Teste de Comentário');
    //     cy.get('[data-testid="input-senha"]').type('123456');
    //     cy.get('.checkbox-label > input').click();
    //     cy.get('[data-testid="btn-submit"]').click();
    //     cy.get('.error-message').should('contain', 'Email inválido');
    // });

    // it('Campo telefone deve ser obrigatório', () => {

    //     cy.get('[data-testid="input-nome"]').type('João da Silva');
    //     cy.get('[data-testid="input-email"]').type('teste@gmail.com');
    //     cy.get('[data-testid="input-nascimento"]').type('10011990');
    //     cy.get('.genero-opcoes > :nth-child(1) > input').click();
    //     cy.get('[data-testid="input-comentario"]').type('Teste de Comentário');
    //     cy.get('[data-testid="input-senha"]').type('123456');
    //     cy.get('.checkbox-label > input').click();
    //     cy.get('[data-testid="btn-submit"]').click();
    //     cy.get('.error-message').should('contain', 'Telefone é obrigatório');
    // });


    // it('Campo gênero deve ser obrigatório', () => {

    //     cy.get('[data-testid="input-nome"]').type('João da Silva');
    //     cy.get('[data-testid="input-telefone"]').type('11999999999');
    //     cy.get('[data-testid="input-email"]').type('teste@gmail.com');
    //     cy.get('[data-testid="input-nascimento"]').type('10011990');

    //     cy.get('[data-testid="input-comentario"]').type('Teste de Comentário');
    //     cy.get('[data-testid="input-senha"]').type('123456');
    //     cy.get('.checkbox-label > input').click();
    //     cy.get('[data-testid="btn-submit"]').click();
    //     cy.get('.error-message').should('contain', 'Selecione um gênero');
    // });

    // it('Campo comentário deve aceitar até 250 caracteres', () => {

    //     const texto = 'A'.repeat(253);
    //     cy.get('[data-testid="input-nome"]').type('João da Silva');
    //     cy.get('[data-testid="input-email"]').type('teste@gmail.com');
    //     cy.get('[data-testid="input-telefone"]').type('11999999999');
    //     cy.get('[data-testid="input-nascimento"]').type('10011990');
    //     cy.get('.genero-opcoes > :nth-child(1) > input').click();
    //     cy.get('[data-testid="input-comentario"]').type(texto);
    //     cy.get('[data-testid="input-comentario"]').invoke('val').should('have.length', 250);

    //     cy.get('[data-testid="input-senha"]').type('123456');
    //     cy.get('.checkbox-label > input').click();
    //     cy.get('[data-testid="btn-submit"]').click();
    //     cy.get('.success-message').should('have.text', '✅ Cadastro realizado com sucesso!');

    // });

    // it('Campo senha deve ser obrigatório', () => {

    //     cy.get('[data-testid="input-nome"]').type('João da Silva');
    //     cy.get('[data-testid="input-email"]').type('teste@gmail.com');
    //     cy.get('[data-testid="input-telefone"]').type('11999999999');
    //     cy.get('[data-testid="input-nascimento"]').type('10011990');
    //     cy.get('.genero-opcoes > :nth-child(1) > input').click();
    //     cy.get('[data-testid="input-comentario"]').type('Teste de Comentário');
    //     cy.get('.checkbox-label > input').click();
    //     cy.get('[data-testid="btn-submit"]').click();
    //     cy.get('.error-message').should('contain', 'Senha é obrigatória');
    // });

    // it('Campo termo de uso deve ser obrigatório', () => {

    //     cy.get('[data-testid="input-nome"]').type('João da Silva');
    //     cy.get('[data-testid="input-email"]').type('teste@gmail.com');
    //     cy.get('[data-testid="input-telefone"]').type('11999999999');
    //     cy.get('[data-testid="input-nascimento"]').type('10011990');
    //     cy.get('.genero-opcoes > :nth-child(1) > input').click();
    //     cy.get('[data-testid="input-comentario"]').type('Teste de Comentário');
    //     cy.get('[data-testid="input-senha"]').type('123456');
    //     cy.get('[data-testid="btn-submit"]').click();
    //     cy.get('.error-message').should('contain', 'Você deve aceitar os Termos de Uso e a Política de Privacidade');
    // });

    // it('Validar o botão Limpar', () => {

    //     cy.get('[data-testid="input-nome"]').type('João da Silva');
    //     cy.get('[data-testid="btn-reset"]').click();
    //     cy.get('[data-testid="input-nome"]').should('have.value', '');
    // });

    // it('Não preencher nenhum campo obrigatório', () => {

    //     cy.get('[data-testid="btn-submit"]').click();
    //     cy.get('.error-message').should('have.length.at.least', 5);
    // });
});

/// <reference types="cypress" />



describe('Criar Conta', () => {
    beforeEach(() => {
        cy.visit('formulario-cadastro/');
    })

    it.only('Deve preencher o Formulário com sucesso', () => {
        cy.preencherFormulario({ genero: 'Masculino', aceitarTermo: true });

        cy.get('.success-message').should('have.text', '✅ Cadastro realizado com sucesso!');
    });

    it('Campo nome deve ser obrigatório', () => {
        cy.preencherFormulario({ nome: '{selectall}{backspace}' });
        cy.get('.error-message').should('contain', 'Nome é obrigatório');
    });



    it('Campo email deve ser obrigatório', () => {
        cy.preencherFormulario({ email: '{selectall}{backspace}' });
        cy.get('.error-message').should('contain', 'Email inválido');
    });

    it('Campo telefone deve ser obrigatório', () => {
        cy.preencherFormulario({ telefone: '{selectall}{backspace}' });
        cy.get('.error-message').should('contain', 'Telefone é obrigatório');
    });


    it('Campo gênero deve ser obrigatório', () => {
        cy.preencherFormulario({ genero: undefined });
        cy.get('.error-message').should('contain', 'Selecione um gênero');
    });

    it('Campo comentário deve aceitar até 250 caracteres', () => {
        const texto = 'A'.repeat(253);
        cy.preencherFormulario({ comentario: texto, genero: 'Masculino', aceitarTermo: true });
        cy.get('[data-testid="input-comentario"]').invoke('val').should('have.length', 250);
        cy.get('.success-message').should('have.text', '✅ Cadastro realizado com sucesso!');
    });


    it('Campo senha deve ser obrigatório', () => {
        cy.preencherFormulario({ senha: '{selectall}{backspace}' });
        cy.get('.error-message').should('contain', 'Senha é obrigatória');
    });

    it('Campo termo de uso deve ser obrigatório', () => {
        cy.preencherFormulario({ aceitarTermo: false });
        cy.get('.error-message').should('contain', 'Você deve aceitar os Termos de Uso e a Política de Privacidade');
    });

    it('Validar o botão Limpar', () => {

        cy.preencherFormulario({ nome: 'João da Silva' });
        cy.get('[data-testid="btn-reset"]').should('be.visible').click();
        cy.get('[data-testid="input-nome"]').should('have.value', '');
    });

    it('Não preencher nenhum campo obrigatório', () => {

        cy.get('[data-testid="btn-submit"]').click();
        cy.get('.error-message').should('have.length.at.least', 5);
    });
});

# 🚀 Automação de Testes - MasterClass Automation Live (Turma 1)

Este repositório contém automações desenvolvidas para a **MasterClass Automation Live - Turma 1**. O projeto cobre testes automatizados para **Frontend** e **Backend**, garantindo a validação de funcionalidades essenciais.

## 📌 Tecnologias Utilizadas

- **Automação Frontend**: Cypress
- **Automação Backend**: Testes de API utilizando Cypress
- **API Usuários - Serverest**: Métodos testados: `POST`, `GET`, `PUT`, `DELETE`

## 🚀 Como Clonar e Rodar o Projeto

### 🔽 Clonar o repositório:
```bash
git clone <https://github.com/AlexandreTI-AUT/MasterClass-T1>
cd <NOME_DO_REPOSITORIO>
```

### 📦 Instalar dependências:
```bash
npm install  # Instalar as dependências do projeto
```

### ▶ Executar testes Frontend e Backend:
```bash
npx cypress open  # Abrir a interface do Cypress para testes manuais
npx cypress run  # Executar os testes automatizados no modo headless
```


### 📊 Gerar Relatório Allure

Este projeto utiliza o [**Allure Report**](https://docs.qameta.io/allure/) para gerar relatórios detalhados dos testes automatizados.

#### ✅ Executar testes e gerar relatório:

```bash
npm run cypress:run        # Executa os testes com geração dos resultados Allure
npm run allure:generate    # Gera o relatório a partir dos resultados
npm run allure:open        # Abre o relatório em seu navegador padrão
```

Após rodar os comandos acima, o relatório ficará disponível em:  
[http://127.0.0.1:xxxx](http://127.0.0.1:xxxx) (o terminal mostrará a porta exata).

> ⚠️ Certifique-se de que a pasta `allure-results` foi criada após a execução dos testes.


## 🤝 Contribuição
Sinta-se à vontade para contribuir com melhorias e sugestões! 🚀

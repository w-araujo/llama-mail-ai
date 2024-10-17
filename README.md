### Imagens da solução (UI)

Uma aplicação web que combina geração de mensagens por IA e envio de emails personalizados.

![llama-mail-ai](https://github.com/w-araujo/llama-mail-ai/blob/main/public/images/llama3-mail-ai.png)

E-mail testing

![email-test-send](https://github.com/w-araujo/llama-mail-ai/blob/main/public/images/email-test-send.png)

Banco de dados

![mongo-logs](https://github.com/w-araujo/llama-mail-ai/blob/main/public/images/mongo-logs.png)

### Entendimento do Problema

- **Objetivo:** Disponibilizar o llama3 uma ia generativa para criar e enviar e-mails personalizados.

- **Requisitos:** Criação das mensagens com o llama3, Envio de e-mails, logs de emails salvos no banco de dados, limitador de requisições por hora.

### Divisão dos Componentes

- **llama3:** Representa as informações que serão geradas atravez da api externa que prove esse serviço de IA Generativa.

- **E-mail:** Responsável por realizar a criação do serviço que irá prover o envio dos e-mails.

- **Logs:** Responsável por realizar a criação dos logs e salvar no banco de dados.

- **Serviços:** Responsável por realizar a lógica principal do sistema, que é a criação do email personalizado, envio e logs.

### Arquitetura

#### Frontend

- **public:** Diretório raiz do frontend do projeto, contendo os arquivos necessários para a interface do usuário e scripts necessários.

#### Backend

- **src:** Contém todo o desenvolvimento do projeto.

- **controller:** Contém os controladores da entrada e saída das requisições.

- **services:** Contém as lógicas do serviços.

- **routes:** Contém as rotas daa aplicação.

- **database:** Configurações de conexão com o MongoDB e esquemas de banco de dados.

- **tests:** Testes unitários para os serviços.

- **API:** Integração com APIs externas.

- **factories:** Fábricas para facilitar a criação de objetos e o teste unitário.

- **interfaces:** Definições de interfaces do TypeScript.

- **model:** Modelos utilizados no sistema, como o modelo de e-mail.

- **templates:** Templates HTML utilizados para o envio de e-mails.

### 🚀 Features

#### Endpoints

<ol>
 <li> 
 Message generator with llama3 | route -> (POST) llama3/createMessage
</li>
 <li> 
 E-mail sender | route -> (POST) email/send
 </li>
  <li> 
 Health Check | route -> (GET) healthCheck/
 </li>
</ol>

---
sidebar_position: 1
title: Test.AI
---
# Tutorial de Instalação e Configuração do [Test.AI](https://marketplace.visualstudio.com/items?itemName=GabrieldePaulaBrunetti.test-ai)     

Este tutorial descreve o processo de instalação da biblioteca Python `test-ai-leds` e da extensão `Test.AI` no Visual Studio Code, além das configurações necessárias para seu funcionamento.

## Pré-requisitos

Antes de começar, verifique se você já tem o seguinte instalado em sua máquina:

- **Python** (incluindo o gerenciador de pacotes `pip`)
- **Visual Studio Code**
- **Node.js** (recomendado)

---

## Passo 1: Instalar a Biblioteca Python

1. Abra um terminal em sua máquina.
2. Execute o seguinte comando para instalar a biblioteca:

```bash
pip install test-ai-leds
```

3. Após a instalação, certifique-se de que o diretório `Scripts` do Python foi adicionado à variável de ambiente `PATH`.
   - Windows:
     - Execute no terminal `pip show test-ai-leds`
     - Algumas informações serão retornadas e entre elas estará a localização dos pacotes instalados. Será algo como:
      `C:\Users\user\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\site-packages`
     - Basta alterar o último diretório de site-packages para Scripts. Exemplo:
      `C:\Users\user\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\Scripts`
     - Adicione esse caminho nas variáveis de ambiente
     - Nota: O mesmo pode ser feito utilizando virtual enviroments do python caso não queira instalar a biblioteca globalmente. Nesse caso o caminho dos Scripts será relativo a pasta da venv.
  - Linux:
    - Linux não permite instalações globais de pacotes python. Portanto é preciso criar um virtual enviroment com o comando: `python -m venv <nome da venv>`
    - Ative a venv com `source <caminho da venv>/bin/activate`
    - Execute `pip install test-ai-leds`
    - O caminho dos Scripts em linux geralmente é `<caminho da venv/bin`
    - Execute `nano ~/.bashrc` e adicione no final do arquivo `export PATH=$PATH:/<caminho da sua venv>/bin`
    - Execute `source ~/.bashrc` para efetivar as alterações

---

## Passo 2: Instalar a Extensão [Test.AI](https://marketplace.visualstudio.com/items?itemName=GabrieldePaulaBrunetti.test-ai) no Visual Studio Code

1. Abra o Visual Studio Code.
2. Vá até a aba de extensões clicando no ícone de "Extensions" no lado esquerdo (ou use o atalho `Ctrl+Shift+X`).
3. Na barra de pesquisa, digite `Test.AI`.
4. Encontre a extensão `Test.AI` e clique em **Install** para instalá-la.

---

## Passo 3: Configurar o Arquivo `.env` do Projeto

1. No projeto aberto no Visual Studio Code, crie (ou edite) um arquivo chamado `.env` na raiz do repositório.
2. Adicione as seguintes configurações ao arquivo:

```env
LLM_MODEL=<um modelo de LLM que você queira usar>
API_KEY=<sua chave de API para o modelo LLM escolhido>
SWAGGER_PATH=<caminho completo para o documento Swagger referente ao projeto>
DTO_SOURCE=<caminho completo para a pasta onde os DTOs do projeto estão>
```

   ### Modelo Padrão
   Por padrão, é recomendado o uso do modelo **Gemini**, que possui uma API gratuita. Você pode gerar sua chave de API através deste [link](https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br).
   Defina o LLM_MODEL no seu .env como "gemini/gemini-1.5-flash"
   
   ### Exemplo
   ```env
   LLM_MODEL=gemini/gemini-1.5-flash
   API_KEY=abc123def456
   SWAGGER_PATH=C:/Users/SeuUsuario/Projeto/swagger.json
   DTO_SOURCE=C:/Users/SeuUsuario/Projeto/DTOs
   ```

3. Salve o arquivo `.env`.

---

## Dica: Verificar as Dependências do Node.js (Opcional)

Embora não seja obrigatório, recomenda-se ter o **Node.js** instalado para garantir que todas as ferramentas e dependências sejam executadas sem problemas. Você pode verificar se o Node.js está instalado executando:

```bash
node -v
```

Se o comando retornar a versão do Node.js, significa que ele já está instalado.

Caso contrário, você pode baixá-lo e instalá-lo a partir do site oficial: [Node.js Downloads](https://nodejs.org/)

---

## Finalização

Após seguir esses passos, a biblioteca Python `test-ai-leds` e a extensão `Test.AI` devem estar configuradas e prontas para uso. Certifique-se de verificar as variáveis no arquivo `.env` e garantir que o diretório Scripts do python esteja salvo no PATH.

---

# Como Usar

## Funcionalidade 1: Gerar Arquivos de Código Gherkin (Features, BDD)

### Pré-requisito

- Um documento de requisito no formato `.andes`

### Passo a Passo

1. Abra o documento `.andes` no Visual Studio Code.
2. Clique com o botão direito no editor de texto.
3. No menu de contexto, selecione a opção **"Generate BDD feature"**.
4. A ferramenta gerará automaticamente os arquivos Gherkin (`.feature`) e salvará os arquivos em uma pasta chamada `features`.
   - Caso a pasta `features` ainda não exista na raiz do projeto, ela será criada automaticamente.

---

## Funcionalidade 2: Gerar Steps das Features (C# com xUnit)

### Pré-requisito

- Um arquivo Gherkin (`.feature`) gerado pela funcionalidade anterior ou adicionado manualmente.

### Passo a Passo

1. Abra o arquivo `.feature` no Visual Studio Code.
2. Clique com o botão direito no editor de texto.
3. Escolha uma das seguintes opções no menu de contexto:
   - **"Generate for this feature"**: Gera os steps relacionados apenas à feature aberta no momento.
   - **"Generate for all features"**: Gera os steps para todas as features contidas na pasta `features`.
4. Os steps serão salvos em arquivos C# na pasta `steps`.
   - Caso a pasta `steps` ainda não exista na raiz do projeto, ela será criada automaticamente.

---

## Funcionalidade 3: Gerar teste Black-Box em Cypress

### Pré-requisito

- Um arquivo Vue (`.vue`)
- Preferencialmente elementos com atributo `data-test`.

### Passo a Passo

1. Abra o arquivo `vue` no Visual Studio Code.
2. Clique com o botão direito no editor de texto.
3. Escolha a seguinte opção: **"Generate cypress black box test"**
4. Os arquivos cypress serão salvos na pasta `cypress`


## Funcionalidade 4: Gerar teste unitários em C#

### Pré-requisito

- Um arquivo C# (`.cs`)
- O arquivo deve pertencer ao projeto do ConectaFapes para ser gerado corretamente

### Passo a Passo

1. Abra o arquivo `.cs` no Visual Studio Code.
2. Clique com o botão direito no editor de texto.
3. Escolha a seguinte opção: **"Generate unit test for this file"**
4. Os arquivos serão salvos na pasta `unit`
---

### Observação

- Todas as pastas onde os arquivos são salvos serão criadas caso não ainda não exista

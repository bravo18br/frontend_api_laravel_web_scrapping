# Frontend Laravel/Vue Monitora Sites

## Página do projeto

[https://github.com/bravo18br/frontend_api_laravel_web_scrapping](https://github.com/bravo18br/frontend_api_laravel_web_scrapping)

## Descrição

Este projeto é um frontend para a API: [https://github.com/bravo18br/api_laravel_web_scrapping](https://github.com/bravo18br/api_laravel_web_scrapping). Utiliza as tecnologias Laravel e Vue para fornecer uma interface interativa e responsiva para monitoramento de sites.

## Tecnologias Utilizadas

- **Laravel**: Framework PHP para desenvolvimento de aplicações web.
- **Vue.js**: Framework JavaScript para construção de interfaces de usuário.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/bravo18br/frontend_api_laravel_web_scrapping.git
   cd frontend_api_laravel_web_scrapping
   ```

2. Instale as dependências do PHP:
   ```bash
   composer install
   ```

3. Instale as dependências do Node.js:
   ```bash
   npm install
   ```

4. Compile os assets:
   ```bash
   npm run dev
   ```

## Configuração

1. Crie um arquivo `.env` a partir do `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Configure o arquivo `.env` com suas credenciais e configurações de banco de dados.

3. Gere a chave da aplicação:
   ```bash
   php artisan key:generate
   ```

4. Execute as migrações do banco de dados:
   ```bash
   php artisan migrate
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:
   ```bash
   php artisan serve
   ```

2. Acesse o projeto em [http://localhost:8000](http://localhost:8000).

## Comandos Úteis

- Atualizar os assets:
  ```bash
  npm run dev
  ```

- Assistir e compilar os assets durante o desenvolvimento:
  ```bash
  npm run watch
  ```

- Compilar os assets para produção:
  ```bash
  npm run production
  ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

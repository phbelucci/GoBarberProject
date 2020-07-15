MODELS

Representação de como um dado é salvo na nossa aplicação
campos, tipos etc

REPOSITORIOS
executa as ações relacionadas aos dodos

SERVICES
vai armazenar a regra de negocio da nossa aplicação



Rota: Receber a requisição, chamar um outro arquivo, devolver resposta

Services não tem acesso a request ou response, o que o execute() faz é retornar um trown informando o erro para que a Rota possa tratar.

SOLID
O SOLID é uma sigla que representa 5 princípios da programação orientada a objetos:

- **SRP (Single Responsability Principle);**
- **OCP (Open–closed Principle);**
- **LSP (Liskov substitution Principle);**
- **ISP (Interface segregation Principle);**
- **DIP (Dependency Inversion Principle).**

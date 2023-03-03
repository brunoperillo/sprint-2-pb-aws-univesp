# Avaliação Sprint 2 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da segunda sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***
## Grupo_04

*[Carlos Roberto Camilo](https://github.com/crobertocamilo)

*[Diego Lopes](https://github.com/Diegox0301)

*[Kelly Patricia Lopes Silva](https://github.com/KellyPLSilva)

***
### Introdução:

Nessa Sprint 02 exploramos alguns dos principais serviços fornecidos pela AWS para o desenvolvimento e deploy de aplicações em ambiente de nuvem. 
Além disso desenvolvemos e documentarmos as dificuldades conhecidas e como utilizar o sistema, código fonte do desenvolvimento e a configuração nginx.

Mas o que é AWS? 

É um provedor de soluções em nuvem com entrega sobre demanda e oferece muitos serviços integrados de forma gerenciável e otimizada.  

### Escopo:

A primeira interação entre a equipe foi  através de reuniões diárias antes da daily para ir alinhando as pautas da Sprint 02, nosso primeiro objetivo foi acertar as tarefas de cada integrante. 

Com isso separamos as atividades em três parte, dessa forma:

1 - Readme - Kelly P L Silva

2 - Criação VPC e configuração no console AWS - Diego Lopes 

3 - Instalação nginx e configuraçao na instância - Carlos Roberto Camilo

Aprendemos a navegar pelo console, interagimos com a plataforma e exploramos os serviços AWS.
### Primeiros passo-a-passo com AWS

-  Criar uma conta na *[AWS](https://aws.amazon.com/pt/);

      Nessa parte é necessário tem um cartão de crédito para criar uma conta na AWS, não paga no primeiro momento só se utilizar uma determinada quantidade. 
      É possivel pesquisar mais sobre o o nível gratuito da  AWS *[nesse link](https://aws.amazon.com/pt/free/free-tier-faqs/). 
      
      Observação: No projeto de bolsa da Compass UOL foi disponibilizado as contas, então não feito o primeiro passo para a criação de conta. 

## Passos de execução do projeto 

- Acessamos o AWS Console e exploramos os serviços

- Iniciamos criando uma VPC;

- Criamos a Internet Gateway e associamos a VPC;

- Geramos duas rotas, sendo uma publica e outra privada;

- Criamos a Nat Gateway para conexão da rota pública com IP elástico. 

- Criamos e configuramos o Security Group com as regras de entradas e saídas.

- Criamos uma instância t2.micro

- Configuramos um servidor nginx na instância;

- Torcamos ou acrescentamos a porta 9000 para acessar atráves do nginx. 

- Criação VPC e configuração no console AWS *[PDF]

- *[URL](http://52.5.247.37:9000). 

### Requisitos

- Noção básica de nuvem 
- Conhecimento básico em programação
- Muita dedicação, persistência e calma🙂

## Execução (Código Fonte)

Exposição na web do projeto da Sprint 1, com a utilização da AWS Cloud.

## Dificudades conhecidas 

- A naturalização para usuário do sistema Windows [pré-requisitos](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html#rdp-prereqs), para conectar-se à sua instância do Windows.

- Familialização com a plataforma AWS para monitorar a performance, criação e configuração das portas e endpoints. 
  Principalmente se liberou a porta certa de acesso, para maiores [informações](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/WindowsGuide/ConfigurePortsAndEndpoints.html).











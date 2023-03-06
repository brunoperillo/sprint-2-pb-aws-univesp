# Avaliação Sprint-2 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da segunda sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***
## Grupo-4

- [Carlos Roberto de Souza Camilo](https://github.com/crobertocamilo)
- [Diego Lopes](https://github.com/Diegox0301)
- [Kelly Patricia Lopes Silva](https://github.com/KellyPLSilva)

***
### Introdução:

Nessa Sprint 02, exploramos alguns dos principais serviços fornecidos pela AWS para o desenvolvimento e *deploy* de aplicações em ambiente de nuvem. 
Além disso, desenvolvemos e documentamos as dificuldades conhecidas e como utilizar o sistema, código fonte do desenvolvimento e a configuração de um servidor **nginx**.

Mas o que é AWS? 

É um provedor de soluções em nuvem com entrega sobre demanda, oferecendo muitos serviços integrados de forma gerenciável e otimizada.  

### Escopo:

As interações ocorreram através de reuniões diárias, tendo como objetivo acompanhar o desenvolvimento do projeto e nivelar o conhecimento dos membros. Embora todos os integrantes tenham participado de todas as etapas do projeto, o foco de cada um foi definido como:

1 - Readme e validação MVP (produto mínimo viável) - Kelly

2 - Criação VPC e configuração no console AWS - Diego

3 - Instalação nginx, configuraçao na instância e adaptação do código JavaScript [(Sprint1-grupo1)](https://github.com/Compass-pb-aws-2023-Univesp/sprint-1-pb-aws-univesp/tree/grupo-1) ao *front-end* [(sprint1-grupo3)](https://github.com/Compass-pb-aws-2023-Univesp/sprint-1-pb-aws-univesp/tree/grupo-3)  - Carlos

Aprendemos a navegar pelo console, interagimos com a plataforma e exploramos os serviços AWS.

### Primeiros passos com a AWS

-  Criar uma conta na [AWS](https://aws.amazon.com/pt/);

      Nessa etapa, é necessário tem um cartão de crédito para criar uma conta na AWS, não paga no primeiro momento, somente uso que extrapolhar a franquia gratuita disponível (*free tier*). 
      É possivel pesquisar mais sobre o o nível gratuito da  AWS [neste link](https://aws.amazon.com/pt/free/free-tier-faqs/). 
      
      Observação: O Programa de Bolsas da **Compass.UOL** foi disponibilizou as contas coorporativas aos alunos, sendo estas utilizadas para o desenvolvimento do projeto. 

## Passos para execução do projeto 

1. Acesso ao console da AWS e exploração dos principais os serviços;

2. Criação de uma VPC e de sub-nets públicas e privadas;

3. Criação de um Internet Gateway e associação à VPC;

4. Criação das rotas pública e privada;

5. Criação de um NAT Gateway para conexão de instâncias na rede privada; 

6. Criação de um Security Group com as regras de entrada e saída, e conexão TCP personalizada para a porta 9000; 

7. Criação de instâncias t2.micro com imagem do tipo Amazon Linux 2 AMI, e associada a um Elastic IP;


Os passos 1 a 7 são apresentados em detalhes no arquivo [disponibilizado](https://github.com/Compass-pb-aws-2023-Univesp/sprint-2-pb-aws-univesp/blob/grupo-4/files/AWS.pdf) neste repositório.


8. Instalação de um servidor **nginx** na instância;

9. Configuração do **nginx** para acesso através da porta 9000; 


Os passos 8 e 9 pode ser realizados através dos comandos mostrados neste [script](https://github.com/Compass-pb-aws-2023-Univesp/sprint-2-pb-aws-univesp/blob/grupo-4/files/instalar_nginx.sh).


10. Correções e adaptação do código JavaScript para validação de dados desenvolvido na sprint-1 ao front-end;

11. *Deploy* da aplicação na instância.


A aplicação está rodando em nuvem e disponível no link **http://52.5.247.37:9000** para acesso através de qualquer navegador.

### Conhecimentos exigidos para o desenvolvimento do projeto

- Noção básica de nuvem 
- Conhecimento básico em programação (HTML e JavaScript)
- Conhecimento básico de comandos linux para acesso à máquina remota
- Muita dedicação, persistência e calma🙂

## Execução (Código Fonte)

Exposição na *web* do projeto da Sprint-1 (versão revisada), com a utilização da AWS Cloud.

## Dificudades conhecidas 

- A naturalização para usuário do sistema Windows [pré-requisitos](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html#rdp-prereqs), para conectar-se à instâncias remotas linux via SSH.

- Familialização com a plataforma AWS para monitorar a performance.

- Liberação das portas específicas tanto na instância criada quanto na configuração do servidor **nginx** [informações](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/WindowsGuide/ConfigurePortsAndEndpoints.html).










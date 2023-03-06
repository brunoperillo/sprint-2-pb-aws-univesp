# Sprint 2 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da segunda sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***
## Equipe
- Adila Mota
- Irati Gonçalves Maffra
- Márcio Lima Brunelli
***

## Objetivo
Exposição na web do projeto da Sprint 1 (**Sistema para validação de Dados de Cadastro**), com a utilização da AWS Cloud.
***
## Pré-requisito
Familiarização com conceitos básicos de rede, além de possuir uma conta AWS e acesso ao console AWS.
***
## Execução
A rede privada foi criada dentro da plataforma da AWS

**Especificações**:

1. Criação de uma VPC.
-   No console AWS abra o serviço de VPC
-   Selecione o botão "Criar VPC"
-   Defina o nome da VPC, o bloco de endereço de IP e as configurações do DNS
-   Aguarde confirmação
-   Divida o bloco de endereço de IP utilizado na criação da VPC:
    -   Na a opção "Subnets" crie quatro Subnets: duas Subnets Privadas vinculadas à VPC, cada uma em um zona de disponibilidade e com bloco de IP diferentes; duas Subnets Públicas vinculadas à VPC criada, cada uma em zona de disponibilidade e com bloco de IP diferentes

2. Criação de um Internet Gateway, associada à VPC criada.
-   No serviço de VPC, seleciona a opção "Internet Gateway"
-   Selecione o botão "Criar Internet Gateway"
-   Com Internet Gateway criado selecionado clique em "Associar com VPC" e escolha a VPC criada anteriormente

3. Criação das rotas públicas e privadas.
-   No serviço de VPC, selecione "Rotas"
-   Selecione o botão "Criar rota" e escolha a tabela que será atualizada
-   Adicione uma rota para a rede pública, com o bloco de endereço IP 0.0.0.0/0 e selecione o Internet Gateway criado como destino
-   Adicione uma nova rota para a rede privada

4. Criação de um NAT Gateway para ligação da rota pública com um IP elástico.
-   No serviço de VPC, selecione "NAT Gateways"
-   Selecione o botão "Criar NAT Gateway" e escolha a VPC e a sub-rede pública
-   Selecione um Elastic IP para associar à NAT Gateway 
-   Aguarde a confirmação da criação

5. Conclusão da configuração da rota privada.
-   Na "Tabela de Rotas", selecione a rota privada e configure com o bloco de endereço IP 0.0.0.0/0
-   selecione o NAT Gateway como destino
   
6. Criação do Security Group com as regras entrada e saída.
-   No serviço de VPC, clique "Grupos de Segurança"
-   Crie um grupo de segurança público e vincule as seguintes configurações:
    -   Entrada: libere o acesso "SSH" ao seu próprio endereço de IP
    -   Saída: libere todo o tráfego ao endereço 0.0.0.0/0

7. Criação de uma instância t2.micro.
-   No serviço EC2 clique em executar instância
-   Escolha os nomes e tags, defina o sistema operacional
-   Em "Tipo de instância" selecione a opção "t2.micro"
-   Insira ou crie par de chaves
-   Edite a "Configurações de rede" à partir da sua VPC, escolha as subnets para instância
-   Atribua ou não IP público automaticamente
-   Em "grupo de segurança" escolha ou crie para a instância
-   Em "configuração de armazenamento" escolha a quantidade e tipo de volume para sua instância
-   Eexecute a instância e aguarde a sua disponibilidade

8. Instalação de um servidor nginx na instância.
-   Após configurar as maquinas, realize os comandos no terminal:

sudo su –
yum update -y
sudo amazon-linux-extras install nginx1
systemctl enable nginx –-now Após os comandos acima, a máquina estará pronta para upar sua aplicação na pasta destinada para root do nginx.

9. Mudança para a porta 9000 para acesso através do nginx.
-   Configure o “Elastic Load Balancer” no console
-   Acesse o painel EC2 e vá em “Balanceamento de carga”, na configuração:
    -   Escolha o esquema para sua aplicação
    -   No campo “Listeners” escolha a porta HTTP 9000
    -   Zona de disponibilidade, selecione as subnets criadas
    -   Crie um grupo de segurança para regras de entrada da porta 9000
    -   Na configuração roteamento selecione a porta 9000
    -   Registre o destino da instância para upar na web
    -   Confirme suas configurações e a Elastic Load Balancer será criada

10. Subida no servidor da aplicação da Sprint 1.

11. Colocação da identificação do grupo-5 e os nomes dos componenentes na página html disponibilizada com o código da Sprint 1,

12. Permissão de acesso da porta 9000 à pasta com a aplicação, para visualização da página online.

## Esquema da arquitetura proposta:

<img src='assets/aws_web_server.jpg' width='50%'>
***

## Desenvolvimento

O projeto foi desenvolvido na plataforma da AWS seguindo roteiro proposto para a Sprint 2 e divisão de tarefas entre os membros da equipe (grupo-5). O código em JavaScript da Sprint 1 utilizado foi o do grupo-2.

***

## Instrução de uso
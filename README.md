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

## Execução
A rede privada foi criada dentro da plataforma da AWS

**Especificações**:

1. Criação de uma VPC.
https://us-east-1.console.aws.amazon.com/vpc/home?region=us-east-1#vpcs:VpcId=vpc-026b047c4f25003fb

2. Criação de um Internet Gateway, associada à VPC criada.
https://us-east-1.console.aws.amazon.com/vpc/home?region=us-east-1#igws:

3. Criação das rotas públicas e privadas.
https://us-east-1.console.aws.amazon.com/vpc/home?region=us-east-1#subnets:SubnetId=subnet-0f2eca16e1fc941f0

4. Criação de um NAT Gateway para ligação da rota pública com um IP elástico.
https://us-east-1.console.aws.amazon.com/vpc/home?region=us-east-1#NatGateways:

5. Concluisão da configuração da rota privada.

6. Criação do Security Group com as regras entrada e saída.

7. Criação de uma instância t2.micro.
https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Instances:

8. Instalação de um servidor nginx na instância.

9. Mudança para a porta 9000 para acesso através do nginx.

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
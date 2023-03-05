# Avaliação Sprint 2 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da segunda sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***

## Objetivo

Este guia irá orientá-lo na criação de uma Virtual Private Cloud (VPC) na plataforma de nuvem da Amazon (AWS) para a exposição de sites e projetos na web.

## Pré-requisitos

Antes de começar, é necessário ter uma conta da AWS e acesso ao console da AWS. 
É importante também estar familiarizado com os conceitos básicos de redes e segurança.

## Execução (Código Fonte)

#### Passo 1 - Criando uma VPC

1. Abra o Console da AWS e navegue até o serviço de VPC.
2. Clique em "Criar VPC" e defina o nome da sua VPC, juntamente com o bloco de endereço de IP e configurações do DNS.
3. Após isso, clique em "Criar" e aguarde a confirmação.
4. Para que seja possível dividir o bloco de endereço de IP utilizado na criação da VPC, vá até a opção de "Subnets", localizado no menu lateral esquerdo, e crie quatro Subnets:
- Duas Subnets Privadas vinculadas a VPC criada, sendo: cada uma em zona de disponibilidade diferente da outra e com seu respectivo bloco de IP;
- Duas Subnets Públicas vinculadas a VPC criada, sendo: cada uma em zona de disponibilidade diferente da outra e com seu respectivo bloco de IP.
5. Configure as Subnets Públicas selecionando em "Ações", "Editar configurações de sub-rede" e vincule a opção "Habilitar endereço IPv4 público de atribuição automática". Essa configuração deve ser feita apenas nas Subnets Públicas.


#### Passo 2 - Criando um Internet Gateway e associando à VPC

1. No console da VPC, selecione "Internet Gateways" no painel de navegação à esquerda.
2. Clique em "Criar Internet Gateway" e defina um nome para o seu gateway.
3. Selecione o gateway recém-criado e clique em "Associar com VPC".
4. Selecione a VPC que você criou anteriormente e confirme a associação.

#### Passo 3 - Criando rotas públicas e privadas

1. No console da VPC, selecione "Rotas" no painel de navegação à esquerda.
2. Clique em "Criar rota" e defina a tabela de rota que deseja atualizar.
3. Adicione uma nova rota para a rede pública, com o bloco de endereço IP 0.0.0.0/0 e selecione o Internet Gateway que você criou anteriormente como destino.
4. Adicione uma nova rota para a rede privada.

#### Passo 4 - Criando um NAT Gateway

1. No console da VPC, selecione "NAT Gateways" no painel de navegação à esquerda.
2. Clique em "Criar NAT Gateway" e defina a VPC e a sub-rede pública onde o NAT Gateway será criado.
3. Selecione um Elastic IP que será associado ao NAT Gateway e aguarde a confirmação da criação.

#### Passo 5 - Concluir a configuração da rota privada
1. Retorne em "Tabela de Rotas", selecione a rota privada criada e configure-a com o bloco de endereço IP 0.0.0.0/0 e selecione o NAT Gateway como destino.


#### Passo 6 - Criar ou editar o Security Group com as regras entrada e saída
1. No console da VPC, selecione "Grupos de Segurança".
2. Crie um grupo de segurança público e vincule as seguintes configurações:
- Regra de entrada: libere o acesso "SSH" ao seu próprio endereço de IP.
- Regra de saída: libere todo o tráfego ao endereço 0.0.0.0/0.

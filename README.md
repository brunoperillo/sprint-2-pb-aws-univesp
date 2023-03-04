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
2. Clique em "Criar VPC e defina o nome da sua VPC, juntamente com o bloco de endereço de IP e configurações do DNS.
3. Após isso, clique em "Criar" e aguarde a confirmação.

#### Passo 2 - Criando um Internet Gateway e associando à VPC

1. No console da VPC, selecione "Internet Gateways" no painel de navegação à esquerda.
2. Clique em "Criar Internet Gateway" e defina um nome para o seu gateway.
3. Selecione o gateway recém-criado e clique em "Associar com VPC".
4. Selecione a VPC que você criou anteriormente e confirme a associação.

#### Passo 3 - Criando rotas públicas e privadas

1. No console da VPC, selecione "Rotas" no painel de navegação à esquerda.
2. Clique em "Criar rota" e defina a tabela de rota que deseja atualizar.
3. Adicione uma nova rota para a rede pública, com o bloco de endereço IP 0.0.0.0/0 e selecione o Internet Gateway que você criou anteriormente como destino.
4. Adicione uma nova rota para a rede privada, com o bloco de endereço IP da sua sub-rede privada e selecione o NAT Gateway que você criará no próximo passo como destino.

#### Passo 4 - Criando um NAT Gateway

1. No console da VPC, selecione "NAT Gateways" no painel de navegação à esquerda.
2. Clique em "Criar NAT Gateway" e defina a VPC e a sub-rede pública onde o NAT Gateway será criado.
3. Selecione um Elastic IP que será associado ao NAT Gateway e aguarde a confirmação da criação.

#!/bin/bash

####Instruções de uso####

#Se a instância já tiver sido iniciada, digite as instruções individualmente no terminal da máquina.
#Ou copie o arquivo para a máquina e execute como um script:
# sudo chmod +x 
# ./instalar_nginx.sh

#Se a instância ainda será criada, copie o script para janela "Advanced details > User data" na criação da máquina.
#Neste caso, o nginx já estará disponível após a inicialização da máquina.

#Instala o nginx
sudo amazon-linux-extras install nginx1

#Inicia o serviço do nginx
sudo systemctl start nginx

#Configura o nginx para inicializar automaticamente com o sistema
sudo systemctl enable nginx
systemctl enable nginx

#Necessário reiniciar o nginx após fazer alterações no projeto (index.html)
sudo systemctl restart nginx

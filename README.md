# Teaching-HEIGVD-RES-2018-Labo-HTTPInfra

## Objectifs

#### Objectif 1

Le premier objectif est de lancer un serveur apache httpd servant du contenu statique. Le tout est encapsulé dans un containr docker.
La branche git est *fb-apache-static* et le Dockerfile est dans *docker_images*.

* construire l'image docker avec *docker build -t res/apache_php*
* lancer l'image dans un container avec *docker run -d -p 9090:80 res/apache_php*
* possibilité de se connecter au serveur via un navigateur en utilisant l'adresse IP de la VM Docker
* Mode interactif : *docker exec -t res/apache_php /bin/bash*

#### Objectif 2

Le second objectif consiste en lancr un serveur *node* servant du contenu dynamique via le module *chance* fourni par node. Il s'agira à chaque requête de récupérer un payload JSon contenu une liste aléatoire d'étudiants.

* Branche git : *fb-express-dynamic*
* Image docker : *express-image*
* Construire l'image docker de la même manière que dans l'étape précédente.
* Lancer le container:

1) Sans port mapping (depuis l'intérieur de docker)

* *docker run -d res/express_students*
* se connecter avec *telnet <adresse_container> 3000*
* envoyer des requêtes *GET*

2) Avec port mapping

* *docker run -p 9090:3000 res/expres_students*
* se connecter avec *telnet <adresse_vm_docker> 9090*
* Envoyer des requêtes *GET / HTTP/1.1* puis récupérer le fichier JSon (ou directement via le navigateur o7u postman)

#### Objectif 3

L'objectif ici est de mettre en place un reverse-proxy comme point d'entrée unique pour des raisons de sécurité et dans le but de respecter la same-origin_policy. Ceci permet d'envoyer des requêtes Ajax. On passe donc par un reverse proxy à qui on attribue un nom DNS. Pour le navigateur, en communiquant avec le noeud reverse, la same-origin-policy ne sera pas violée.

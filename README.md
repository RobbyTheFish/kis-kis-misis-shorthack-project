# ITAM Mentors
 В данном репозитории расположено решение к Shorthack MISiS. 
### Руководство по деплою:

Запустить VM на Ubuntu.
Далее необходимо установить git:
```
sudo apt-get update
sudo apt-get install git
```
Docker:
```
sudo apt update

sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

sudo apt update

sudo apt-cache policy docker-ce

sudo apt install docker-ce 

sudo apt install docker-compose-plugin
```

```
sudo git clone https://github.com/RobbyTheFish/kis-kis-misis-shorthack-project.git
cd ./kis-kis-misis-shorthack-project.git
docker compose up -d
```

### Ссылка на решение:
https://kiskis.itatmisis.ru/





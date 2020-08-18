
## Quickly running this project
This project has a ready built `docker-compose` setup to quickly create a consistent NextJS environment. With two quick commands, you can view this Boilerplate - without installing NextJS or any dependencies locally. If you don't have Docker Compose, install it [here](https://docs.docker.com/compose/install/):

Build the docker container:  
<small>(Note: this command only needs to be run the first time, or after changes are made to the Dockerfile)</small>
```
docker-compose build nextjs
```


Create your enviroment:
```
docker-compose up -d
```


You should then be able to view your application at http://localhost:3000


When you're finished, you can destroy your temporary environment using:
```
docker-compose down
```


# Run this commands in your terminal.
```
npm install
docker-compose up

to add migration npm run typeorm migration:generate -- -n migrationNameHere
to apply run npm run typeorm migration:run
```


___
To start locally

npm install
docker-compose up (if you have docker)
    if you don't have docker you need install postresql locally or some another database 
    and modigy .env and configuration.ts file 
run npm run typeorm migration:run
npm start

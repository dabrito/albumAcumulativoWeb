
http://localhost:3000/fotos/findAll/json
http://localhost:3000/fotos/findAll/view

http://localhost:3000/fotos/findAllByRate/json?lower=0&higher=1.2
http://localhost:3000/fotos/findAllById/1/json


# GET
curl http://localhost:3000/rest/fotos/findAll/json | npx json

# GET-id
http://localhost:3000/rest/fotos/findById/2/json
http://localhost:3000/rest/fotos/findById/2/json

# POST
En la línea de comandos del cliente, realice una petición POST al URL http://localhost:3000/rest/fotos/save 
con los siguientes parámetros en el body:
curl -X POST -d "titulo=fotos10&descripcion=Lorem ipsum dolor sit amet, consectetur adipiscing elit.&calificacion=4.35&ruta=public/images/fotos10.png" http://localhost:3000/rest/fotos/save | json

# PUT
En la línea de comandos del cliente, realice una petición PUT al URL http://localhost:3000/rest/fotos/update 
con los siguientes parámetros en el body:
curl -X PUT -d "id=11&descripcion=Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&ruta=public/images/fotos10.png&titulo=foto10&calificacion=4.73" http://localhost:3000/rest/fotos/update | json

# DELETE
En la línea de comandos del cliente, realice una petición DELETE al URL http://localhost:3000/rest/fotos/delete/11 
con los siguientes parámetros en el body:
curl -X DELETE http://localhost:3000/rest/fotos/delete/11 | json
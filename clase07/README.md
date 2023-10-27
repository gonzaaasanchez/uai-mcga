Pregunta 1


Crear una API REST que permita consultar, agregar, modificar y eliminar, productos, clientes y ventas. Las entidades estarán guardadas en archivos .json con datos precargados utilizando "mockaroo" (https://www.mockaroo.com/). La elección de los campos y tipos de datos de cada entidad es de forma libre.

Si quiero consultar uno o todo el listado de productos, puedo consultarlo mediante la api rest, también puedo agregar o quitar productos.

Para clientes debo hacer lo mismo que con productos.

En el caso de ventas solamente debo hacer la consulta de las ventas precargadas, las mismas deben traer: fecha de la venta, el id del cliente que realizó la compra y listado de productos con la cantidad comprada de cada uno.

El proyecto debe hacerse de manera grupal con los equipos predefinidos en clases anteriores, se debe utilizar Github, un único repositorio por equipo y deberán responder a esta actividad con el mismo link del equipo. Los commits deben hacerse de forma individual y coordinada entre los miembros del equipo.


--
Example:

Products

curl -X GET -H "Content-Type: application/json"  http://localhost:3000/products

curl -X GET -H "Content-Type: application/json"  http://localhost:3000/products/1

curl -X POST -H "Content-Type: application/json" -d '{"prod": "New Product", "price": 25}' http://localhost:3000/products

curl -X PUT -H "Content-Type: application/json" -d '{"prod": "New Product Edited", "price": 25}' http://localhost:3000/products/101

curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/products/101

Clients

curl -X GET -H "Content-Type: application/json"  http://localhost:3000/clients

curl -X GET -H "Content-Type: application/json"  http://localhost:3000/clients/1

curl -X POST -H "Content-Type: application/json" -d '{"first_name":"Pepito","last_name":"Apellido","email":"pepito@mail.com"}' http://localhost:3000/clients

curl -X PUT -H "Content-Type: application/json" -d '{"first_name":"Pepito","last_name":"Apellido","email":"pepito@mail.com"}' http://localhost:3000/clients/31

curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/clients/31



El proyecto yaydoo_examen_algoritmos_ChristianRodriguez esta realizado en nodejs solo hay que instalar el node_modules 
* npm install
para correr los ejercicios hay que entrar en pakage.js, posicionarse en scripts y darle Depurar

El bak es la base de datos usado en el backEnd y esta en SQL Server 2019

El FrontEnd esta hecho en Angular tambien es necesario instalar los node_modules para su funcionamiento y se ejecuta
* ng serve --o

EL BackEnd esta realizado en Nodejs
es necesario installar el node_modules
para acceder a la base de datos es necesario configurar el archivo conection.json de la carpeta secret
para correr el servicio hay que ejecutar
* npm run dev 


Problema 1: Un cliente requiere utilizar sendgrid para envíos de email, pero otro cliente requiere enviarlos por mandril. Se quiere evitar el uso de IF, y realizar un diseño en donde podamos utilizar más servicios en caso de que un cliente requiera alguno en específico  ¿Qué patrón de diseño utilizarías y por qué?
Opción 1: Strategy
Opción 2: Factory Method
Opción 3: Adapter

El Factory Method salvo que se refiere a una funcion similar es mas facil tener una interface en comun que usar otra logica o adaptar un codigo obsoleto

Problema 2: Explica en tus propias palabras la diferencia entre Factory Method y Abstract Factory. Y proporciona un caso de uso.

La diferencia es que un factory method ya tiene diseñado como sera el comportamiento de cierto producto
mientras que el abstract factory puedes ir modificando o agregando un comportamiento a diferentes lineas

Ejemplo tal vez al manejar creditos sea necesario si se cuenta con diferentes marcas y cada marca tiene sus propios tipos de creditos aunque el propocito es el mismo y la finalidad se la misma puede variar las validaciones que hace cada marca ademas de que cada marca puede tener sus especificaciones para sus diferentes tipos de credito

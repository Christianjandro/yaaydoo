Problema 1: Un cliente requiere utilizar sendgrid para envíos de email, pero otro cliente requiere enviarlos por mandril. Se quiere evitar el uso de IF, y realizar un diseño en donde podamos utilizar más servicios en caso de que un cliente requiera alguno en específico  ¿Qué patrón de diseño utilizarías y por qué?
Opción 1: Strategy
Opción 2: Factory Method
Opción 3: Adapter

El Factory Method salvo que se refiere a una funcion similar es mas facil tener una interface en comun que usar otra logica o adaptar un codigo obsoleto

Problema 2: Explica en tus propias palabras la diferencia entre Factory Method y Abstract Factory. Y proporciona un caso de uso.
La diferencia es que un factory method ya tiene diseñado como sera el comportamiento de cierto producto
mientras que el abstract factory puedes ir modificando o agregando un comportamiento a diferentes lineas
Ejemplo tal vez al manejar creditos sea necesario si se cuenta con diferentes marcas y cada marca tiene sus propios tipos de creditos aunque el propocito es el mismo y la |
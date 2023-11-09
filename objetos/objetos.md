# SIEMPRE SE ESCRIBEN CON PASCAL CASE (PalabraPalabraPalabra)

La clase es lo más alto jerárquicamente hablando. El objeto concreto es una instancia de la clase. Si veo un objeto que no conozco quiere decir que no conozco su clase.

Las clases tienen 3 elementos:
- Propiedades: son variables que tienen una característica (permanecen toda la vida del objeto).

- Constructores: son funciones que me devuelven el objeto. Reciben parametros (le doy los valores de sus propiedades).

- Métodos: son funciones que me dicen cómo usar los objetos.

El objeto llama a sus métodos para dar vida al propio objeto.

## Los objetos tienen polimorfismo:

- Encapsulación: en Javascript no tiene aplicación real. Los ámbitos no están definidos.

- Sobrecarga: varias funciones pueden tener el mismo nombre siempre y cuando reciban diferente número de parámetros.

- Redefinición: al crear una clase puede recibir herencia de una clase padre (si nazco hijo de un ingeniero, soy ingeniero al nacer). Para dar otra herencia además de la clase padre, se usan los interface (concepto similar al tío genético). Cambiar el comportamiento de un objeto es la redefinición.

## En la herencia se juega con 3 tipos de clases:

- Abstracta: solo puede dar herencia pero no puede construir un objeto. Se definen como "metodo();". El ";" final define la clase como abstracta. Tienen que tener mínimo un método abstracto y uno concreto.

- Concretas: todos sus métodos son concretos.

- Clase Interface: todos sus métodos son abstractos. Me dice qué tengo que hacer para ser lo que define mi clase abstracta.

# ORDEN A LA HORA DE CREAR CLASES

1º Propiedades
2º Constructores
3º Métodos



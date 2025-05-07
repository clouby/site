---
title: "Buffers en Node.JS"
description: "Descripción del contenido del artículo relacionado a Buffers en Node.JS"
pubDate: "Jun 28 2020"
heroImage: "/blog-placeholder-2.jpg"
draft: false
---

En el mundo de la internet y lo que mayor importancia se demuestra al navergar, es la información. En general, en la internet es muy comun aprovechar y proveer diferentes tipos de información, como son imágenes, videos, entre otros.

A medida que el tiempo pasa, las aplicaciones son más concurrentes, relacionado a toneladas de información, y es sumamente complicado ofrecer toda información de un abrir y cerrar de ojos.

_¿ Pero si lo pensamos de esta forma ? ..._ Supongamos que creamos un servicio de alto consumo de información, como lo puede ser un servicio de streaming o subir/bajar archivos de nuestro servicio privado. Tenemos implicaciones más inquietantes cuando hablamos de ... _¿ Como llevamos toda esa información hacia el destino y que no afecte la experiencia ni el consumo alto al momento de hacer un tipo de proceso como presentamos anteriormente ?_

Existe algo llamado `Buffers` en Node.JS, que se define como:

> Los objetos Buffer se usan para representar datos binarios en forma de una secuencia de bytes. Muchas API de Node.js, por ejemplo, flujos y operaciones del sistema de archivos, admiten Buffers, ya que las interacciones con el sistema operativo u otros procesos generalmente siempre ocurren en términos de datos binarios.

Esto quiere decir que cualquier representación de datos son transformados en secuencias dividas **(bytes)**, con el único propósito de no enviar una información en bruto sino que vaya de forma progresiva, veamos los siguientes ejemplos:

```js
const buffer = Buffer.from('necromancer') // <Buffer 6e 65 63 72 6f 6d 61 6e 63 65 72>
```

En el anterior ejemplo se transforma un tipo de dato `String` a `Buffer`, por lo que se puede resumir que nuestra cadena de texto fue divida en secuencias de bytes.

Pero este tipo de clase, se entiende como:

- Esta clase es una subclase de **[TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)** por lo que son bloques de memoria de tamaño fijo y no pueden contener ningún otro valor.
- El tamaño de un `Buffer` es definido cuando se crea y no puede ser cambiado.

## Etiquetas de Codificación

Existen muchos cuando hablamos en general de codificación, pero entre tipo de datos como lo son `String` y `Buffers`, los que comúnmente se usan:

- `utf8`: Multi-byte encoded Unicode characters.
- `hex`: Encode each byte as two hexadecimal characters.
- `base64`: Base64 encoding.

Puedes encontrar otras etiquetas [aquí](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings).

A continuación veremos unos breves ejemplos de su creacion y comportamiento:

## Crear un buffer

En primera instancia la clase `Buffer` en el entorno de Node.JS es una propieda global por lo que es accesible en cualquier archivo de tu proyecto y **sin necesidad de `require()`**. Para iniciar, existen varias formas de crear un buffer.

```javascript
// Ejemplo basico para crear un Buffer

const buffer1 = Buffer.alloc(10) // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

En el anterior ejemplo se ha creado un buffer "vacio" con el limite de tamaño de **10 bytes**, siguiendo con este ejemplo, podemos agregar algun espaico en memoria de ese objeto buffer:

```javascript
// Llenar los espacios varios y representarlos en un byte el caracter mostrado

buffer1.fill('y') // <Buffer 79 79 79 79 79 79 79 79 79 79>

buffer1.toString('utf8') // 'yyyyyyyyyy'
```

De los **10 bytes** reservados en memoria fueron llenados cada byte con el caracter **Y** (recordemos que por defecto cada conversión por defecto evalúa la codificación `utf8`).

Otra funcionalidad para crear buffers pero más dinámicos al momento de hablar de espacio en reserva, es derivado a esta función nativa de la clase:

```javascript
// Crear un nuevo buffer pasando un valor ya sea string or array<bytes>

const buffer2 = Buffer.from('doom') // <Buffer 64 6f 6f 6d>
```

Esta funcion reservada llamada `from` permite convertir caracteres o listas directamente a `Buffers` teniendo en cuenta el tamaño del dato de origen, en este caso fue `'doom'`, con un tamaño de **4 bytes** en memoria.

Tambien podemos cambiar el valor de alguna posicion de nuestro buffer:

```javascript
// Modificar alguna posición de nuestro buffer

buffer2[0] = 0x44

buffer2.toString('utf8') // 'Doom'
```

En el ejemplo anterior ha sido reemplazado la primera posición de nuestro buffer, que contiene el valor **"d"** y al ser cambiado este debe ser representado como una codificación en `utf8` a lo que traduce en que **"D"** es equivalente a `0x44`

## Propiedades

A continuación veremos algunas funciones básicas (pero muy útiles) cuando usamos buffers:

### `buffer.keys()`

Este retorna la cantidad de indices asociados al buffer:

```javascript
// Traer el numero de indices en un `Iterator`

const buffer3 = Buffer.from('lovecraft')

buffer3.keys() // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

### `buffer.lastIndexOf(value[, byteOffset][, encoding])`

Esta función verifica en que posición del arreglo de buffer se encuentra el valor que especificamos por parámetros:

```javascript
// Verificar la posicion de un valor determinado

buffer3.lastIndexOf('v') // 2
```

### `buffer.concat(Buffer[], [,totalLength])`

Basicamente juntar `N+1` de buffers para devolver como resultado un nuevo buffer:

```javascript
// Juntar varios objetos para retornar uno nuevo

const bufferSpace = Buffer.from([0x20]) // Representa un spacio `' '`

const buffer4 = Buffer.concat([buffer2, bufferSpace, buffer3])

buffer4.toString('utf8') // 'Doom lovecraft'
```

### `buffer.isEncoding(enconding)`

Revisa y valida que tipo de codificación es referenciado en el objeto buffer:

```javascript
buffer4.isEncoding('utf8') // true

buffer4.isEnconding('base64') // false
```

## Conclusión

Logramos saber un poco en manera de introducción que son los buffers, como se crean y que tipo de comportamientos trae en si, pero dentro de sus casos más utiles son al momento de integrarlos con `Streams`, tomando como gran ventaja la facilidad de migrar datos progresivamente, convertir una imagen, o ofrecer videos en tiempo real.

Espero que les haya gustado este post.

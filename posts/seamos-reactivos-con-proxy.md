---
title: '🔮 - Seamos reactivos con Proxy'
date: '2021-08-05'
published: false
---

Hace pocos dias estuvie investigando un poco sobre **VueJS** ya que soy un completo principiante con respecto a este interesante framework del cliente, pero en mi pronta investigacion, encontre que lanzaron la nueva version de esta tecnologia que seria la version 3, que actualmente ya se encuentr publica y estable (de momento).

Resulta que encontre en que su panorama de como su **data** es completamente reactiva, y a esto me encontre que explicaban con breves ejemplos como es el flujo de todo, pero pause en algo muy puntual, y es que usan una clase nativa de JavaScript, llamada **Proxy**, y es de lo que hablaremos hoy.

## Que es Proxy?

> Basicamente es que tu puedas observar el comportamiento de un objeto, constructor, hasta de una funcion pero agregando tu observacion personalizada.

En otras palabras, puedes escuchar el comportamiento que tenga un objeto nativo o funcion dentro de JS, haciendo de que estos pueden ser alterados bajo nuestro criterio.

Vayamos a nuestro caso en particular:

~~~javascript
const data = { role: 'Dev' }

const proxy = new Proxy(data, {
  get(target, property) {
    // Imprimir ambos campos
    console.log({ target, property })
  }
})

console.log(proxy.role)
~~~

En los casos donde debe imprimir valores, ocurre lo siguiente:

~~~javascript
// 1er console.log
{
  target: { role: 'Dev' },
  property: 'role'
}

// 2do console.log
undefined
~~~

En el **primer caso**, se puede observar que el parametro `target` devuelve el valor del objeto -como referencia de este- y el segundo parametro contiene la propiedad que ha sido llamada en nuestro objeto.

En el **segundo caso** simplemente retorna `undefined` debido a que al ser un objeto proxy, y estamos personalizando el comportamiento -que en este caso es un *get*- no estamos retornando un valor en esa funcion de un proxy.

~~~javascript
const data = { role: 'Dev' }

const proxy = new Proxy(data, {
  get(target, property) {
    // Imprimir ambos campos
    console.log({ target, property })
    // Retornar el valor
    return target[property]
  }
})

console.log(proxy.role)
~~~

Ahora en nuestro caso del segundo resultado si retornaria el proximo valor:

~~~javascript
// 2do console.log
'Dev'
~~~

Tanto como la funcion nativa de Proxy - me refiero al metodo `get` - existen muchos basados en su [API](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

### Caso de Uso

En este caso crearemos unas directivas en nuestras etiquetas de **HTML**, teniendo el cuenta el siguiente criterio:

- `data-get` : Etiqueta que tenga esta directiva (personalizada gracias al prefijo `data-*`) tendra asociado el nombre de la data reactiva y sera asignada por medio del campo `value`
- `name` : Etiqueta que tenga esta directiva (nativa) tendra asociado el nombre de la data reactiva y sera la que genere los eventos de insercion.

En el primer archivo a crear será `index.html` que tiene la siguiente estructura:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proxy</title>
</head>
<body>
  <h1>Proxy</h1>
  <h2 data-get="username"></h2>
  <div class="wrapper">
    <input type="text" name="username"/>
  </div>
  <script src="./proxy.js"></script>
</body>
</html>
~~~

Como mencioné anteriormente, existirá una etiqueta que mostrara el resultado en tiempo de ejecucion - en este caso es en `h2` - y el que estaria ingresando valores - seria nuestra etiqueta `input` - para cumplir este caso.

En el segundo archivo será llamado `proxy.js` con las siguientes instrucciones:

~~~javascript
// Define initial data
const initialData = {
  username: 'Carlos'
}
~~~

En la primera instruccion que definimos el objeto global, la aplicacion entenderia que la llave - en este caso seria `username` - tambien seria el valor de referencia clave para los atributos que usaremos para actualizar los datos en ejecucion.

Despues de definir nuestro estado inicial, procedemos a implementar nuestra funcion que usara `Proxy` para la observacion del estado inicial, esta funcion la llamaremos `reactMin`

~~~javascript
// Define proxy function
function reactMin(data) {
  // Create handler object
  const handler = {
    set(target, property, value) {
      if (typeof value === 'string') {
        const elements = document.querySelectorAll(`[data-get="${property}"]`)
        elements.forEach(element => {
          element.textContent = value
        })
      }

      Reflect.set(target, property, value)
    }
  }

  // Instance proxy state
  const proxy = new Proxy(data, handler)

  // Create event listeners for all inputs
  function setDataEvents(proxyData) {
    return Object.keys(proxyData).forEach(key => {

      const element = document.querySelector(`[name=${key}]`)

      element.addEventListener('input', (event) => {
        Reflect.set(proxyData, key, event.target.value)
      })
    })
  }

  setDataEvents(proxy)

  return proxy
}
~~~

Este codigo se ha definido los siguientes bloques:
- `handler`: Este contiene todos los metodos que la API de **Proxy** soporta actualmente. Este caso demasiado puntual solo usaremos el metodo `set` para observar si la propiedad tendra un cambio "en camino" para poder alterarlo a que tambien modifique los **atributos en el HTML** con el nombre del campo existente
- `proxy`: Esta variable crea la instancia relacionada a la API de **Proxy** solo recibiendo el objeto el cual será observado y el segundo parametro seria el `handler`
- `setDataEvents`: Este ultimo va a generar solo los **inputs** del HTML que contengan el valor de alguno de los campos observados en el proxy - que en nuestro caso solo será `username`


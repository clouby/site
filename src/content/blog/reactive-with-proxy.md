---
title: "Seamos reactivos con Proxy"
description: "Aprende a usar Proxy para crear objetos reactivos en JavaScript"
pubDate: "Aug 05 2021"
heroImage: "/blog-placeholder-2.jpg"
draft: false
---

Hace pocos días estuve investigando un poco sobre **VueJS**, ya que soy un completo principiante con este interesante framework del cliente, pero en mi pronta investigación, encontré que lanzaron la nueva versión de esta tecnología que sería la **versión 3**, que actualmente ya se encuentra pública y estable.

Resulta que su flujo de información es completamente reactiva, además encontré que explicaban con breves ejemplos como es el flujo de todo, pero pause en algo muy puntual, y es que usan una clase nativa de JavaScript, llamada **Proxy**, y es de lo que hablaremos hoy.

## ¿Que es Proxy?

> Basicamente puedes **observar el comportamiento** de un objeto, constructor, hasta de una función pero agregando tus mutaciones personalizadas.

En otras palabras, los **Proxy** pueden escuchar el comportamiento que tenga un objeto nativo o función dentro de _JavaScript_, siendo alterados bajo nuestro criterio.

Vamos a un caso particular:

```javascript
const data = { role: "Dev" };

const proxy = new Proxy(data, {
  get(target, property) {
    // Imprimir ambos campos
    console.log({ target, property });
  },
});

console.log(proxy.role);
```

En los casos donde debe imprimir valores, ocurre lo siguiente:

```javascript
// 1er console.log
{
  target: { role: 'Dev' },
  property: 'role'
}

// 2do console.log
undefined
```

En el **primer caso**, se puede observar que el parámetro `target` devuelve el valor del objeto -como referencia de este- y el segundo parámetro contiene la propiedad que ha sido llamada en nuestro objeto.

En el **segundo caso** simplemente retorna `undefined` debido a que al ser un objeto proxy, y estamos personalizando el comportamiento -que en este caso es un _get_- no estamos retornando un valor en esa función de un proxy.

```javascript
const data = { role: "Dev" };

const proxy = new Proxy(data, {
  get(target, property) {
    // Imprimir ambos campos
    console.log({ target, property });
    // Retornar el valor
    return target[property];
  },
});

console.log(proxy.role);
```

Ahora en nuestro caso del segundo resultado si retornaria el proximo valor:

```javascript
// 2do console.log
"Dev";
```

Tanto como la función nativa de Proxy - me refiero al método `get` - existen más muchos basados en su [API](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

### Caso de Uso

En este caso crearemos unas directivas en nuestras etiquetas de **HTML**, teniendo en cuenta el siguiente criterio:

- `data-get` : Etiqueta que tenga esta directiva (personalizadas gracias al prefijo `data-*`) tendrá asociada el nombre de la data reactiva y sera asignada por medio del campo `value`
- `name` : Etiqueta que tenga esta directiva (nativa) tendrá asociada el nombre de la data reactiva y será la que genere los eventos de inserción.

En el primer archivo a crear será `index.html` que tiene la siguiente estructura:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Proxy</title>
  </head>
  <body>
    <h1>Proxy</h1>
    <h2 data-get="username"></h2>
    <div class="wrapper">
      <input type="text" name="username" />
    </div>
    <script src="./proxy.js"></script>
  </body>
</html>
```

Como mencioné anteriormente, existirá una etiqueta que mostrara el resultado en tiempo de ejecución -en este caso es en `h2`- y quien ingresa valores sería nuestra etiqueta `input` para cumplir este caso.

En el segundo archivo será llamado `proxy.js` con las siguientes instrucciones:

```javascript
// Define initial data
const initialData = {
  username: "",
};
```

En la primera instrucción que definimos el objeto global, la aplicación entendería que la llave - en este caso seria `username` - también sería el valor de referencia clave para los atributos que usaremos para actualizar los datos en ejecución.

Después de definir nuestro estado inicial, procedemos a implementar nuestra función que usara `Proxy` para la observación del estado inicial, esta función la llamaremos `reactMin`

```javascript
// Define proxy function
function reactMin(data) {
  // Create handler object
  const handler = {
    set(target, property, value) {
      if (typeof value === "string") {
        const elements = document.querySelectorAll(`[data-get="${property}"]`);
        elements.forEach((element) => {
          element.textContent = value;
        });
      }

      Reflect.set(target, property, value);
    },
  };

  // Instance proxy state
  const proxy = new Proxy(data, handler);

  // Create event listeners for all inputs
  function setDataEvents(proxyData) {
    return Object.keys(proxyData).forEach((key) => {
      const element = document.querySelector(`[name=${key}]`);

      element.addEventListener("input", (event) => {
        Reflect.set(proxyData, key, event.target.value);
      });
    });
  }

  setDataEvents(proxy);

  return proxy;
}
```

Este codigo se ha definido los siguientes bloques:

- `handler`: Este contiene todos los metodos que la API de **Proxy** soporta actualmente. Este caso demasiado puntual solo usaremos el metodo `set` para observar si la propiedad tendra un cambio "en camino" para poder alterarlo a que tambien modifique los **atributos en el HTML** con el nombre del campo existente.
- `proxy`: Esta variable crea la instancia relacionada a la API de **Proxy** solo recibiendo el objeto el cual será observado y el segundo parametro seria el `handler`.
- `setDataEvents`: Este ultimo va a generar solo los **inputs** del HTML que contengan el valor de alguno de los campos observados en el proxy - que en nuestro caso solo será `username`.

```javascript
const app = reactMin(initialData);
```

Por ultimo, creamos nuestro proxy apuntando al objeto inicial - que en este caso se llama `initialData` - para proceder en hacer cambios a futuro.

> Hemos notado tambien que usamos una clase llamada `Reflect`, hereda todas las acciones de **Proxy** que en resumen es una trampa para que el cambio sea mas efectivo a la hora de hacer una actualizacion para el proxy -el proxy siempre tenga en cuenta esas acciones

```javascript
// Regular
Reflect.set(obj, key, value);

// Es lo mismo que...
obj[key] = value;
```

Si deseas saber mas sobre esta clase, [aqui](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Reflect) puedes encontrar mas info sobre ella.

## Resultado Final

<figure class="videoContainer">
  <video loop autoplay muted>
    <source src="/video/demo_proxy.mp4" type="video/mp4"/>
  </video>
</figure>

### Extra

Tambien podemos cambiar el valor de nuestro campo `username` haciendo en momento de ejecucion, como por ejemplo insertar el valor de la respuesta de una peticion y tambien operaciones **asincronas**:

```javascript
function getAsyncName(id = 1) {
  return fetch(`https://<hostname>/fake/users/${id}`).then((response) =>
    response.json()
  );
}

// Recordemos que tenemos una variable llamada `app`
const app = reactMin(initialData)(
  // Realizamos una operacion asincrona
  async () => {
    app.username = "Loading...";
    const { name } = await getAsyncName(2);
    app.username = name;
  }
)();
```

El resultado seria el siguiente:

<figure class="videoContainer">
  <video loop autoplay muted>
    <source src="/video/demo_proxy_async.mp4" type="video/mp4"/>
  </video>
</figure>

## Conclusión

Logramos entender un poco el propósito básico y abstracto de que son los proxys, y su utilidad a la hora de generar observadores para generar acciones para `X` propiedad.

También es importante entender de que en esto ha sido inspirado muchas librerias y frameworks reactivos, con el propósito de generar una acción/efecto en todos las variables que esperan ser cambiadas, aun así podemos ser reactivos fuera de estas tecnologías, y evaluar nuestros propios métodos.

Espero que haya sido de mucha ayuda, 🤘🏽.

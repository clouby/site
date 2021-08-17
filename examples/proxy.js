// Define main function
const initialData = {
  username: ''
}

function getAsyncName(id = 1) {
  return fetch(`https://my-json-server.typicode.com/joseluisgs/APIRESTFake/users/${id}`).then(response => response.json());
}

// Define proxy function
function reactMin(data) {
  const proxy = new Proxy(data, {
    get(target, property) {
      return Reflect.get(target, property)
    },
    set(target, property, value) {
      if (typeof value === 'string') {
        const elements = document.querySelectorAll(`[data-get="${property}"]`)
        elements.forEach(element => {
          element.textContent = value
        })
      }

     Reflect.set(target, property, value)
    }
  })


  function setDataEvents(proxyData) {
    return Object.keys(proxyData).forEach(key => {

      const element = document.querySelector(`[name=${key}]`)

      element.addEventListener('input', (event) => {
        Reflect.set(proxyData, key, event.target.value)
      })
    })
  }

  setDataEvents(proxy)

  return proxy;
}

const app = reactMin(initialData);

const changeName = document.getElementById('async-name')

changeName.addEventListener('click', async () => {
  app.username = 'Loading...'
  const { name } = await getAsyncName(2)
  app.username = name
})
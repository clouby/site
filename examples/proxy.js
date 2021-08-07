// Define main function
const initialData = {
  username: 'Carlos'
}

// Define proxy function
function reactMin(data) {
  const proxy = new Proxy(data, {
    get(target, property) {
      // return Reflect.get(target, property)
    },
    set(target, property, value) {

      if (typeof value === 'string') {
        const element = document.querySelector(`[data-get="${property}"]`)

        element.textContent = value
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


const app = reactMin(initialData)

console.log(app.username)

// app.username = 'Carlos'

// app.age = 27

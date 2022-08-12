import { to } from '../lib/vunbo.esm.js'

function foo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })
}

function bar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('reject')
    }, 2000)
  })
}

async function run() {
  const [err, res] = await to(foo())
  console.log(err, res) // null, 'success'

  const [err2, res2] = await to(bar())
  console.log(err2, res2) // reject undefined
}

run()

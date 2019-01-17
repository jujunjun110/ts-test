import MyMod from './js/my_mod'
import './scss/style.scss'

async function main() {
  console.log(123)

  const m = new MyMod()
  console.log(m.message())

  const res = await m.fetch_url('http://google.com')
  console.log(res)
}

main()

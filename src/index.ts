import MyMod from './js/my_mod'
import './scss/style.scss'

async function main() {
  const m = new MyMod()
  const res = await m.fetch_url('http://google.com')
  console.log(res)
}

main()

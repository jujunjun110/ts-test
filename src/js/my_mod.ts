export default class MyMod {
  message(): string {
    return 'hello'
  }

  extract_number(text: string): number | null {
    const res = text.match(/\d{1}/g)
    return (res === null) ? null : parseFloat(res.join(""))
  }

  fib(num: number): number {
    function fib_inner(counter: number, prev1: number, prev2: number): number {
      return (counter == 0) ? prev1 : fib_inner(counter - 1, prev1 + prev2, prev1)
    }
    return fib_inner(num, 0, 1)
  }
}

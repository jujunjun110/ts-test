export default class MyMod {
  message(): string {
    return 'hello'
  }

  extract_number(text: string): number | null {
    const res = Array.prototype.filter
      .call(text, (char: string) => {
        return '0123456789'.indexOf(char) !== -1
      })
      .join('')

    if (res.length === 0) {
      return null
    }

    return parseFloat(res)
  }

  fib(num: number): number {
    function fib_inner(counter: number, prev1: number, prev2: number): number {
      return (counter == 0) ? prev1 : fib_inner(counter - 1, prev1 + prev2, prev1)
    }
    return fib_inner(num, 0, 1)
  }
}

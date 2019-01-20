export default class MyMod {
  message(): string {
    return 'hello'
  }

  extract_number(text: string): number | null {
    const res = text.match(/\d{1}/g)

    if (res == null) {
      return null
    }

    return parseFloat(res.join(''))
  }

  async fetch_url(url: string): Promise<string | null> {
    try {
      const res = await fetch(url)
      return res.text()
    } catch (_) {
      return null
    }
  }

  fib(num: number): number {
    if (num == 1 || num == 2) {
      return 1
    }
    return this.fib(num - 1) + this.fib(num - 2)
  }

  fib2(num: number): number {
    function fib_inner(count: number, prev1: number, prev2: number) {
      return (count == 0) ? prev1 : fib_inner(count - 1, prev2, prev1 + prev2)
    }
    return fib_inner(num, 0, 1)
  }
}

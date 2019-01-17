import 'request'

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

  fetch(url: string): string {
    return 'a'
  }
}

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
}

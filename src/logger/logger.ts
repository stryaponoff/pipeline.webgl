export default class Logger {
  public static log(...data: any[]) {
    console.log(`${Logger.getTimestamp()}:`, ...data)
  }

  public static warn(...data: any[]) {
    console.warn(`${Logger.getTimestamp()}:`, ...data)
  }

  public static error(...data: any[]) {
    console.error(`${Logger.getTimestamp()}:`, ...data)
  }

  private static getTimestamp(): string {
    const now = new Date()
    return [
      String(now.getHours()).padStart(2, '0'),
      String(now.getMinutes()).padStart(2, '0'),
      [
        String(now.getSeconds()).padStart(2, '0'),
        String(now.getMilliseconds()).padStart(3, '0'),
      ].join('.')
    ].join(':')
  }
}

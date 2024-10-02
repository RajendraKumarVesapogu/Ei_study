export class Logger {
  public static log(message: string): void {
    console.log(`[LOG] ${new Date().toISOString()} - ${message}`);
  }

  public static error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }
}

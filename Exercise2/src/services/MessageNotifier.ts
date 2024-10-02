export class MessageNotifier {
    private static observers: Map<string, ((message: string) => void)[]> = new Map();
  
    public static subscribe(roomId: string, callback: (message: string) => void): void {
      if (!this.observers.has(roomId)) {
        this.observers.set(roomId, []);
      }
      this.observers.get(roomId)?.push(callback);
    }
  
    public static notify(roomId: string, message: string): void {
      this.observers.get(roomId)?.forEach(callback => callback(message));
    }
  }
  
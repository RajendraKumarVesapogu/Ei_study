export class Mutex {
    private mutex = Promise.resolve();
  
    public lock(): PromiseLike<() => void> {
      let begin: (unlock: () => void) => void = () => { };
  
      this.mutex = this.mutex.then(() => {
        return new Promise(begin);
      });
  
      return new Promise(res => {
        begin = res;
      });
    }
  }
  
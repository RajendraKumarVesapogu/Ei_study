export declare class Mutex {
    private mutex;
    lock(): PromiseLike<() => void>;
}

export interface IPromiseData {
    promise: Promise<string>;
    resolve: (value: string | PromiseLike<string>) => void;
    reject: (reason?: any) => void;
}

export default class Lexemes {
    protected readonly _lexemes: Map<string, string>;
    protected readonly _promiseData: Map<string, IPromiseData>;

    constructor() {
        this._lexemes = new Map();
        this._promiseData = new Map();
    }

    has(key: string): boolean {
        return this._lexemes.has(key);
    }

    getAsync(key: string): Promise<string> {
        if (this._lexemes.has(key)) {
            return Promise.resolve(this._lexemes.get(key) as string);
        }
        let promiseData = this._promiseData.get(key);
        if (!promiseData) {
            const prom = new Promise<string>((resolve, reject) => {
                promiseData = { promise: prom, resolve, reject };
                this._promiseData.set(key, promiseData);
            });
            promiseData!.promise = prom;
        }
        return promiseData!.promise;
    }

    set(key: string, value: string) {
        this._lexemes.set(key, value);
        const promiseData = this._promiseData.get(key);
        if (promiseData) {
            this._promiseData.delete(key);
            promiseData.resolve(value);
        }
    }

}

export const lexemesSingleton = new Lexemes();

class LocalStorageService {
    rawGet(key: string) {
        return window.localStorage.getItem(key)
    }

    get<T = {}>(key: string) {
        const value = this.rawGet(key)
        if (value == null) return value;
        return JSON.parse(value) as T
    }

    set(key: string, value: unknown): boolean {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            return true
        }
        catch {
            return false
        }
    }
}

export const localStorageService = new LocalStorageService()
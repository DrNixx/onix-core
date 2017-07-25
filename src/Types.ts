export interface IDisposable {
    /**
     * Ликвидировать объект.
     */
    dispose(): void;
}

export interface ITyped {
    _type: string;
}
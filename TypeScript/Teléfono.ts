//Exportamos clase Teléfono
export class Teléfono {
    private _tipo: string;
    private _número: number;

    constructor(tipo: string, número: number) {
        this._tipo = tipo;
        this._número = número;
    }

    //Setters
    public set tipo(value: string) {
        this._tipo = value;
    }
    public set número(value: number) {
        this._número = value;
    }

    //Getters
    public get tipo(): string {
        return this._tipo;
    }
    public get número(): number {
        return this._número;
    }
}
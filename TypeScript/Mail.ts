//Exportamos clase Mail
export class Mail {
    private _tipo: string;
    private _dirección: string;

    constructor(tipo: string, dirección: string) {
        this._tipo = tipo;
        this._dirección = dirección;

    }

    //Setters
    public set tipo(value: string) {
        this._tipo = value;
    }
    public set dirección(value: string) {
        this._dirección = value;
    }

    //Getters
    public get tipo(): string {
        return this._tipo;
    }
    public get dirección(): string {
        return this._dirección;
    }
}
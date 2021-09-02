//Exportamos clase Dirección
export class Dirección {
  private _calle: string;
  private _número: number;
  private _piso: number | string;
  private _letra: string;
  private _cp: number;
  private _población: string;
  private _provincia: string;

  constructor(
    calle: string,
    num: number,
    piso: number | string,
    letra: string,
    cp: number,
    población: string,
    provincia: string
  ) {
    this._calle = calle;
    this._número = num;
    this._piso = piso;
    this._letra = letra;
    this._cp = cp;
    this._población = población;
    this._provincia = provincia;
  }

  //Setter
  public set calle(value: string) {
    this._calle = value;
  }
  public set número(value: number) {
    this._número = value;
  }
  public set piso(value: number | string) {
    this._piso = value;
  }
  public set letra(value: string) {
    this._letra = value;
  }
  public set cp(value: number) {
    this._cp = value;
  }
  public set población(value: string) {
    this._población = value;
  }
  public set provincia(value: string) {
    this._provincia = value;
  }

  //Getters
  public get calle(): string {
    return this._calle;
  }
  public get número(): number {
    return this._número;
  }
  public get piso(): number | string {
    return this._piso;
  }
  public get letra(): string {
    return this._letra;
  }
  public get cp(): number {
    return this._cp;
  }
  public get población(): string {
    return this._población;
  }
  public get provincia(): string {
    return this._provincia;
  }
}

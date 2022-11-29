import { Auxiliar } from "./Auxiliar Farmaceutico";

export class Producto extends Auxiliar{
    private fecha_ven:string;

    constructor(fecha_vec:string,codigo:number,nombre:string,genero:string)
    {
        super(codigo,nombre,genero);
        this.fecha_ven=fecha_vec;
    }
    public get_fecha_ven():string{
        return this.fecha_ven;
    }
    public set_fecha_ven(fecha_vec:string){
        this.fecha_ven=fecha_vec;
    }

}
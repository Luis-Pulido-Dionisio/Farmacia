import { Auxiliar } from "./Auxiliar Farmaceutico";

export class Cliente extends Auxiliar{
    private apellidos:string=" ";
    private telefono:number=0;
    private cod_cliente:number=0;

    constructor(apellidos:string,telefono:number,codigo:number,nombre:string,genero:string,cod_cliente:number)
    {
        super(codigo,nombre,genero)
        this.apellidos=apellidos;
        this.telefono=telefono;
        this.cod_cliente=cod_cliente;
    }

    public get_apellidos():string{
        return this.apellidos;
    }
    public get_telefono():number{
        return this.telefono;
    }
    public get_cod_cliente():number{
        return this.cod_cliente;
    }
    public set_apellidos(apellidos:string){
        this.apellidos=apellidos;
    }
    public set_telefono(telefono:number){
        this.telefono=telefono;
    }
    public set_cod_cliente(cod_cliente:number){
        this.cod_cliente=cod_cliente;
    }
}
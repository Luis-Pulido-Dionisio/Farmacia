import { Cliente } from './Cliente';

export class Pedido extends Cliente{
    private cantidad:number=0;

    constructor(apellidos:string,telefono:number,cod_cliente:number,cantidad:number,nombre:string,genero,codigo:number){
        super(apellidos,telefono,codigo,nombre,genero,cod_cliente)
        this.cantidad=cantidad;
    }
    public get_cantidad():number{
        return this.cantidad;
    }
    public set_cantidad(cantidad:number){
        this.cantidad=cantidad;
    }
}
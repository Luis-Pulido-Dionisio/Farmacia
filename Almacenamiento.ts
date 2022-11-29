import { Producto } from './Producto';
export class Almacenamiento{
    private cantidad=0;
    private Productos:any[]=[];

    constructor(cantidad:number){
        
        this.cantidad=cantidad;
    }
    public get_cantidad():number{
        return this.cantidad;
    }
    public set_cantidad(cantidad:number){
        this.cantidad=cantidad;
    }
     
    public agregarProductos(cod_producto:Producto,cantidad:number){
        this.cantidad++;
        let Registro={
            Registro:this.cantidad,
            cod_producto:Producto,
            cantidad:Number,
        };
        this.Productos.push(Registro);

    }
    public ListaProductos():void{
        console.log(this.ListaProductos);
    }
    
};
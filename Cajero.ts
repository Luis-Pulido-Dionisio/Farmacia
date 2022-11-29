export class Cajero{
    private codigo:number=0;
    private nombre:string=" ";
    private genero:string=" ";
    public cantidad=0;
    private productos:any[]=[];

    constructor(codigo:number,nombre:string,genero:string)
    {
        this.codigo=codigo;
        this.genero=genero;
        this.nombre=nombre;
    }
    public get_codigo():number{
        return this.codigo;
    }
    public set_codigo(codigo:number){
        this.codigo=codigo;
    }
    public get_nombre():string{
        return this.nombre;
    }
    public set_nombre(nombre:string){
        this.nombre=nombre;
    }
    public get_genero():string{
        return this.genero;
    }
    public set_genero(genero:string){
        this.genero=genero;
    }
    
    public agregarProducto (Cantidad:number,nom_pro:string):void{
        this.cantidad++;
        let registro={
            registro:this.cantidad,
            Cantidad:Cantidad,
            nom_pro:nom_pro,
        };
        this.productos.push(registro);
    }
    public Listaproducto():void{
        console.log(this.productos);
    }
}
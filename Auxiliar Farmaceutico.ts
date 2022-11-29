export class Auxiliar{
    private codigo:number=0;
    private nombre:string=" ";
    private genero:string=" ";

    constructor(codigo:number,nombre:string,genero:string)
    {
       this.codigo=codigo;
       this.nombre=nombre;
       this.genero=genero;
    }

    public get_codigo():number {
        return this.codigo;
      }
    public get_nombre():string{
        return this.nombre;
    }
    public get_genero():string{
        return this.genero;
    }

    public set_codigo(codigo:number){
        this.codigo=codigo;
    }
    public set_nombre(nombre:string){
        this.nombre=nombre;
    }
    public set_genero(genero:string){
        this.genero=genero;
    }
}
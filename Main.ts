import { Auxiliar } from "./Auxiliar Farmaceutico";
import { Cliente } from './Cliente';
import { Cajero } from "./Cajero";
import { Producto } from './Producto';
import { Almacenamiento } from "./Almacenamiento";

const Pedro=new Auxiliar(1234,"Pedro","Hombre")

const Juan=new Cliente("Lopez",1234,1234,"Juan","Hombre",1)
console.log(Juan);

const Jorge=new Cajero(1234,"Jorge","Hombre")

const Prod=new Producto("28/11/2022",1234,"Agua","nose")
console.log(Prod);

const Produ=new Producto("28/11/2022",1234,"Paracectamol","nose")
console.log(Produ);

const Almac=new Almacenamiento(2)

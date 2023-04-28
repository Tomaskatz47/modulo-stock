import { Producto } from "./Producto";
export class Combo extends Producto{

    private productos: Array<Producto>;
    private precioC?: number;
    private stockC?: number;
    constructor(descripcion:string )
    {
        super(descripcion);
        
        this.productos=[];
    }

    public agregarProducto(producto:Producto){
        this.productos.push(producto);
    }


    public precio(): number {
       /* var precioFinal=0;
        this.productos.forEach(p=>precioFinal+= p.precio());
        return precioFinal;*/

        return this.productos.reduce((precioFinal,producto) =>precioFinal+producto.precio(),0)
    }
    public stock(): number {
       /* var vMin=99999999999;
        this.productos.forEach(p=> {
            if(p.stock()<vMin)                  //metodo forEach
            {
                vMin=p.stock()
            }
        }
        )
        return vMin;*/
        
        /*                                      //metodo reduce
            const productoConMenorStock= this.productos.reduce((p1,p2) =>p2.stock()<p1.stock()? p1:p2)
            return productoConMenorStock.stock();
        */

        return this.productos.reduce((p1,p2) =>p1.stock()<p2.stock()? p1:p2).stock();       //reduce simplif

    }
    
}
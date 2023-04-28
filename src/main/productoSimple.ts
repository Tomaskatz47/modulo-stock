import { Producto } from "./Producto";

export class ProductoSimple extends Producto{

    private precioP?: number;
    private stockP?: number;

    constructor(descripcion:string, precio:number, stock:number )
    {
        super(descripcion);
        this.precioP=precio;
        this.stockP=stock;
    }
    /*constructor(precio:number, stock:number)
    {
        this.precio= precio;
        this.stock=stock;
    }*/

    public precio(): number {

        return this.precioP!;

        throw new Error("Method not implemented.");
    }
    public stock(): number {

        return this.stockP!;
        throw new Error("Method not implemented.");
    }
    
}
import { Combo } from "../main/combo";
import { ProductoSimple } from "../main/productoSimple";

var motos;
var casco;
var guantes;
var chalecos;
var pilotos;
var combo:Combo;

beforeEach(()=> {
    motos= new ProductoSimple("una moto",100000,20);
    casco= new ProductoSimple("una casco",50000,20);
    guantes= new ProductoSimple("una guantes",25000,15);
    chalecos= new ProductoSimple("una chalecos",8000,20);
    pilotos= new ProductoSimple("una pilotos",25000,20);

    combo= new Combo("unCombo")
    combo.agregarProducto(guantes);
    combo.agregarProducto(pilotos);
})

test("Combo precio 50000", () => {
    
    expect(combo.stock()).toBe(15);

});
test("Combo stock 15", () => {
    
    expect(combo.stock()).toBe(15);

});




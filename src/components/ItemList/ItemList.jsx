import {React} from "react";
import Item from "../Item/Item";



const ItemList = ({ productos }) => {
  
  return (

    <>

<div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Todos nuestros productos</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 cursor-pointer">
        
      {
        productos.map((producto) => {
          return(
            <Item key={producto.id} producto={producto}/>
          )
        })
      }
        
      </div>
    </div>
  </div>

      
    </>
  );
};

export default ItemList;

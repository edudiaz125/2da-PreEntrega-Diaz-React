import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Section from "../Section/Section";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaProductos } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../public/articulos.json");
        const data = await response.json();

        if (categoriaProductos) {
          const productosFiltrados = data.filter(
            (producto) => producto.categoria === categoriaProductos
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoriaProductos]);

  return (
    <>
      <Section
        greeting={"La Casa de La Musica"}
        info={"Encontra El instrumento que buscas"}
      />
      {productos.length == 0 ? (
        <h1>CARGANDO..</h1>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};

export default ItemListContainer;

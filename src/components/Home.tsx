import { useState } from "react";
import { ListaEscolhas } from "./ListaEscolhas";
import { Escolher } from "./Escolher";
import Escolha from "../models/EscolhaModel"
import { AddEscolha } from "./AddEscolha";

export const Home = () => {
  const [escolhas, setEscolhas] = useState<Escolha[]>([]);
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-950 to-gray-950">
      <div className="bg-gradient-to-tr from-indigo-50 to-gray-100 px-20 pt-10 pb-6 sm:px-16 sm:mx-auto sm:max-w-2xl rounded-3xl ">
        <div className="pb-8">
          <h1 className="text-center text-4xl font-bold">Livre Arbítrio</h1>
          <p className="text-center text-xl mt-4">Decida seu futuro</p>
        </div>
        <AddEscolha setEscolhas = {setEscolhas} escolhas={escolhas}/>
        <ListaEscolhas escolhas = {escolhas}/>
        <Escolher setEscolhas = {setEscolhas} escolhas={escolhas}/> 
      </div>
    </div>
  );
};

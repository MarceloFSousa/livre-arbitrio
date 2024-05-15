import { useState } from "react";
import { ListaEscolhas } from "./ListaEscolhas";
import { Escolher } from "./Escolher";
import Escolha from "../models/EscolhaModel"
import { AddEscolha } from "./AddEscolha";

export const Home = () => {
  const [escolhas, setEscolhas] = useState<Escolha[]>([]);
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-800 py-12 sm:py-24">
      <div className="relative bg-white px-20 pt-10 pb-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:px-16">
        <div className="pb-8">
          <h1 className="text-center text-3xl font-bold">Livre Arbítrio</h1>
          <p className="text-center text-lg mt-4">Decida seu futuro</p>
        </div>
        <AddEscolha setEscolhas = {setEscolhas} escolhas={escolhas}/>
        <ListaEscolhas escolhas = {escolhas}/>
        <Escolher setEscolhas = {setEscolhas} escolhas={escolhas}/> 
      </div>
    </div>
  );
};

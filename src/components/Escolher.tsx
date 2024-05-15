import { useState } from "react";
import Escolha from "../models/EscolhaModel";

interface EscolherProps {
  setEscolhas: React.Dispatch<React.SetStateAction<Escolha[]>>;
  escolhas: Escolha[];
}

export const Escolher: React.FC<EscolherProps> = ({
  setEscolhas,
  escolhas,
}) => {
  const [showDiv, setShowDiv] = useState(false);
  const [valorEscolhido, setValorEscolhido] = useState<Escolha>();

  const handleButtonClick = () => {
    if (escolhas.length > 0) {
      setShowDiv(true);
      const escolha = getValorAleatorio(escolhas);
      setValorEscolhido(escolha);
      setEscolhas([]);
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center pb-2">
        <button
          onClick={handleButtonClick}
          className="px-16 py-4 mx-auto mt-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-3xl text-xl"
        >
          Escolher
        </button>
      </div>
      {showDiv && valorEscolhido && (
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold text-gray-800">
            Valor escolhido:
          </h2>
          <p className="text-3xl font-semibold text-indigo-900">{valorEscolhido.nome}</p>
        </div>
      )}
    </div>
  );
};

function getValorAleatorio(valores: Escolha[]): Escolha {
  const valor = valores[Math.floor(Math.random() * valores.length)];
  console.log(valor);
  return valor;
}

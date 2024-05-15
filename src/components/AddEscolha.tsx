import React, { useState } from "react";
import Escolha from "../models/EscolhaModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

interface AddEscolhaProps {
  setEscolhas: React.Dispatch<React.SetStateAction<Escolha[]>>;
  escolhas: Escolha[];
}

export const AddEscolha = ({setEscolhas, escolhas} : AddEscolhaProps) => {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    const newEscolha: Escolha = {
      id: Math.random() * 6000,
      nome: text,
    };

    setEscolhas([...escolhas, newEscolha]);

    setText("");
  };
  return (
      <form onSubmit={onSubmit} className="flex items-center">
      <input
        type="text"
        className="flex-1 p-2 text-center text-indigo-700 text-lg font-medium border border-gray-300 rounded-l-lg focus:outline-none"
        placeholder="Digite sua escolha"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white text-lg p-2 rounded-r-lg hover:bg-indigo-700 items-center"
      >
        <FontAwesomeIcon icon={faAnglesRight} className="h-5 w-5" />
      </button>
    </form>
  );
};

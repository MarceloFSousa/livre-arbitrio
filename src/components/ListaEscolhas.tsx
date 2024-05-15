import Escolha from "../models/EscolhaModel";

interface EscolhasProps{
  escolhas: Escolha[]
}

export const ListaEscolhas =( {escolhas} : EscolhasProps) => {
  return (
    <div>
      <ul className="text-lg font-medium pt-4 text-center text-indigo-700">
        {escolhas.map((escolha) => (
          <li key={escolha.id}>{escolha.nome}</li>
        ))}
      </ul>
    </div>
  );
};

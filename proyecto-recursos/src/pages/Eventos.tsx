import {Card} from "../components/Card";

import { eventos } from "../data/eventos";

export default function Eventos() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-8">Eventos importantes</h2>

      <div className="grid gap-6">
        {eventos.map((e, index) => (
          <Card key={index} title={e.titulo} description={e.descripcion} />
        ))}
      </div>
    </div>
  );
}
import {Card} from "../components/Card";
import { personajes } from "../data/personajes";

export default function Personajes() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-8">Personajes históricos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personajes.map((p, index) => (
          <Card key={index} title={p.nombre} description={p.descripcion} />
        ))}
      </div>
    </div>
  );
}
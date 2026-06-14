import {Card} from "../components/Card";
import { Timeline } from "../components/Timeline";
export default function Home() {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="text-5xl font-bold text-center">Historia Argentina</h1>
      <p className="text-center mt-4 text-gray-700">
        Plataforma educativa interactiva
      </p>
<div className="mt-12">
  <h2 className="text-3xl font-bold text-center">Línea de Tiempo</h2>
  <Timeline />
</div>
      {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Historia" description="Línea de tiempo completa" 
        />
        <Card title="Personajes" description="Figuras clave" />
        <Card title="Eventos" description="Hechos históricos" />
      </div> */}
     </div>
  );
}
export function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-5 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default function Proyectos() {
  const proyectos = [
    { id: 1, title: "Item 1", icon: "fas fa-star", color: "bg-blue-500" },
    { id: 2, title: "Item 2", icon: "fas fa-heart", color: "bg-green-500" },
    { id: 3, title: "Item 3", icon: "fas fa-moon", color: "bg-purple-500" },
    { id: 4, title: "Item 4", icon: "fas fa-sun", color: "bg-red-500" },
    { id: 5, title: "Item 5", icon: "fas fa-cloud", color: "bg-yellow-500" },
    { id: 6, title: "Item 6", icon: "fas fa-bolt", color: "bg-indigo-500" },
    { id: 7, title: "Item 7", icon: "fas fa-leaf", color: "bg-pink-500" },
    { id: 8, title: "Item 8", icon: "fas fa-gem", color: "bg-teal-500" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-8 justify-items-center">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center ${proyecto.color} h-80 w-80`}
          >
            <i className={`${proyecto.icon} text-3xl mb-2`}></i>
            <span className="text-xl font-semibold">{proyecto.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

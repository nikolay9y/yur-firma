export default function SpecialistsPage() {
  const specialists = [
    { name: 'Анна Петрова', role: 'Партнёр, гражданское право', exp: '12 лет' },
    { name: 'Иван Сидоров', role: 'Адвокат, уголовные дела', exp: '9 лет' },
    { name: 'Мария Козлова', role: 'Юрист по корпоративному праву', exp: '7 лет' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Наши специалисты
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialists.map((spec, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Фото</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{spec.name}</h2>
              <p className="text-blue-700 font-medium mt-1">{spec.role}</p>
              <p className="text-gray-600 mt-2">Опыт: {spec.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
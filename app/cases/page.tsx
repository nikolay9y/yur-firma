export default function CasesPage() {
  const cases = [
    { title: 'Выигран спор о наследстве на квартиру', desc: 'Клиент получил 100% долю в наследстве после оспаривания завещания.' },
    { title: 'Отмена уголовного дела по ст. 159 УК РФ', desc: 'Дело прекращено за отсутствием состава преступления.' },
    { title: 'Защита ООО от рейдерского захвата', desc: 'Суд признал недействительными все поддельные документы.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Наши кейсы
      </h1>
      <div className="space-y-8">
        {cases.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border hover:shadow-md transition">
            <h2 className="text-xl font-bold text-blue-800 mb-3">{c.title}</h2>
            <p className="text-gray-700">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
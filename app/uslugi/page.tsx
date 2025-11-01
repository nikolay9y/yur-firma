export default function UslugiPage() {
  const services = [
    { title: 'Гражданское право', desc: 'Споры о недвижимости, наследстве, договорах.' },
    { title: 'Семейное право', desc: 'Разводы, раздел имущества, алименты.' },
    { title: 'Уголовное право', desc: 'Защита по статьям УК РФ, досудебное урегулирование.' },
    { title: 'Корпоративное право', desc: 'Регистрация ООО, споры между учредителями.' },
    { title: 'Налоговое право', desc: 'Проверки ФНС, доначисления, споры с налоговой.' },
    { title: 'Трудовое право', desc: 'Увольнения, невыплата зарплаты, споры с работодателем.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Наши юридические услуги
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
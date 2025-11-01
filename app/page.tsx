export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Профессиональная юридическая помощь
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Мы защищаем интересы бизнеса и частных лиц с 2010 года. Более 500 успешно завершённых дел.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/uslugi"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Наши услуги
          </a>
          <a
            href="/specialists"
            className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition"
          >
            Наши специалисты
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Конфиденциальность', desc: 'Все данные клиентов строго защищены' },
            { title: 'Опыт', desc: 'Средний стаж наших юристов — 10+ лет' },
            { title: 'Результат', desc: '92% дел завершены в пользу клиента' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
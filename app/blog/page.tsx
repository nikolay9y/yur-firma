export default function BlogPage() {
  const posts = [
    { title: 'Как правильно составить договор аренды?', date: '1 ноября 2025' },
    { title: 'Что делать, если вас вызвали в полицию?', date: '25 октября 2025' },
    { title: 'Изменения в законодательстве по банкротству с 2025 года', date: '10 октября 2025' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Блог
      </h1>
      <div className="space-y-6">
        {posts.map((post, i) => (
          <article key={i} className="bg-white p-6 rounded-xl border hover:shadow-md transition cursor-pointer">
            <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-700">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
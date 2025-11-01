import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {/* Шапка */}
        <header className="bg-blue-800 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200">
              ЮрКомпания
            </Link>
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center gap-6">
                <li><Link href="/" className="hover:text-blue-200 transition">Главная</Link></li>
                <li><Link href="/uslugi" className="hover:text-blue-200 transition">Услуги</Link></li>
                <li><Link href="/specialists" className="hover:text-blue-200 transition">Специалисты</Link></li>
                <li><Link href="/cases" className="hover:text-blue-200 transition">Кейсы</Link></li>
                <li><Link href="/blog" className="hover:text-blue-200 transition">Блог</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Основной контент */}
        <main className="min-h-screen">{children}</main>

        {/* Подвал */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} ЮрКомпания. Все права защищены.</p>
            <p className="mt-2 text-gray-400">г. Москва, ул. Юридическая, д. 10</p>
            <p className="mt-1 text-gray-400">Тел: +7 (495) 123-45-67</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
import { CheckCircle2, Clock, XCircle } from "lucide-react";

export default function DashboardPage() {
  const applications = [
    { id: 1, uni: "Stanford University", country: "🇺🇸 США", major: "Computer Science", status: "pending" },
    { id: 2, uni: "Technical University of Munich", country: "🇩🇪 Германия", major: "Data Engineering", status: "accepted" },
    { id: 3, uni: "UCL", country: "🇬🇧 Великобритания", major: "Software Engineering", status: "rejected" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Добро пожаловать, Алексей 👋</h1>
        <p className="text-gray-500 mt-1">Твой прогресс поступления и актуальные статусы.</p>
      </header>

      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Статус подготовки</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-600">Сбор документов</span>
          <span className="text-sm font-bold text-gray-700">65%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div className="bg-blue-600 h-3 rounded-full" style={{ width: "65%" }}></div>
        </div>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <span>Выбор ВУЗов</span><span className="text-blue-600 font-bold">Сбор документов</span><span>Подача заявок</span><span>Офферы</span>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div><p className="text-sm font-medium text-gray-500 uppercase tracking-wider">IELTS Academic</p><p className="text-3xl font-bold text-gray-900 mt-1">7.5</p></div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">C1 Advanced</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div><p className="text-sm font-medium text-gray-500 uppercase tracking-wider">SAT</p><p className="text-3xl font-bold text-gray-900 mt-1">1480</p></div>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Top 5%</div>
        </div>
      </section>

      <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200"><h2 className="text-lg font-bold text-gray-800">Мои заявки в ВУЗы</h2></div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="p-4 font-medium">Университет</th><th className="p-4 font-medium">Страна</th><th className="p-4 font-medium">Специальность</th><th className="p-4 font-medium">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">{app.uni}</td><td className="p-4 text-gray-600">{app.country}</td><td className="p-4 text-gray-600">{app.major}</td>
                  <td className="p-4">
                    {app.status === "accepted" && <span className="flex items-center w-max gap-1.5 px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-sm font-medium"><CheckCircle2 className="w-4 h-4" /> Принят</span>}
                    {app.status === "pending" && <span className="flex items-center w-max gap-1.5 px-2.5 py-1 rounded-md bg-yellow-100 text-yellow-700 text-sm font-medium"><Clock className="w-4 h-4" /> Рассмотрение</span>}
                    {app.status === "rejected" && <span className="flex items-center w-max gap-1.5 px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-sm font-medium"><XCircle className="w-4 h-4" /> Отказ</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
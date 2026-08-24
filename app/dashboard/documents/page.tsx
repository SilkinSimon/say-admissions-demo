import { FileCheck, FileUp, Clock } from "lucide-react";

export default function DocumentsPage() {
  const docs = [
    { id: 1, name: "Скан загранпаспорта", status: "uploaded", date: "12.08.2024" },
    { id: 2, name: "Мотивационное письмо", status: "pending", date: "-" },
    { id: 3, name: "Аттестат / Диплом (перевод)", status: "review", date: "22.08.2024" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Мои документы 📄</h1>
        <p className="text-gray-500 mt-1">Загрузите необходимые файлы для подачи заявок.</p>
      </header>

      <div className="grid gap-4">
        {docs.map((doc) => (
          <div key={doc.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${doc.status === 'uploaded' ? 'bg-green-100' : doc.status === 'review' ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                {doc.status === 'uploaded' && <FileCheck className="text-green-600 w-6 h-6" />}
                {doc.status === 'review' && <Clock className="text-yellow-600 w-6 h-6" />}
                {doc.status === 'pending' && <FileUp className="text-gray-400 w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-500">
                  {doc.status === 'uploaded' ? `Загружен: ${doc.date}` : doc.status === 'review' ? 'На проверке у ментора' : 'Ожидает загрузки'}
                </p>
              </div>
            </div>
            
            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${doc.status === 'pending' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {doc.status === 'pending' ? 'Загрузить' : 'Обновить файл'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
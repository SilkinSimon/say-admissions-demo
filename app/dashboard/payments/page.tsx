import { CreditCard, Receipt } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Оплата услуг 💳</h1>
        <p className="text-gray-500 mt-1">Управление балансом и история платежей.</p>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg flex justify-between items-center">
        <div>
          <p className="text-blue-100 font-medium mb-1">К оплате (Application Fee)</p>
          <h2 className="text-4xl font-bold">$150.00</h2>
        </div>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
          <CreditCard className="w-5 h-5" /> Оплатить сейчас
        </button>
      </section>

      <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">История транзакций</h2>
        </div>
        <div className="divide-y divide-gray-100 p-6 space-y-4">
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-2 rounded-lg"><Receipt className="text-gray-600 w-5 h-5"/></div>
              <div>
                <p className="font-semibold text-gray-900">Услуги ментора (Сентябрь)</p>
                <p className="text-sm text-gray-500">Успешно • 01.09.2024</p>
              </div>
            </div>
            <span className="font-bold text-gray-900">$200.00</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-2 rounded-lg"><Receipt className="text-gray-600 w-5 h-5"/></div>
              <div>
                <p className="font-semibold text-gray-900">Оплата платформы SAY</p>
                <p className="text-sm text-gray-500">Успешно • 15.08.2024</p>
              </div>
            </div>
            <span className="font-bold text-gray-900">$50.00</span>
          </div>
        </div>
      </section>
    </div>
  );
}
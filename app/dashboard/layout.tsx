import { LayoutDashboard, FileText, MessageCircle, Wallet, GraduationCap, LogOut } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <span className="font-bold text-xl text-gray-900">SAY</span>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Дашборд
          </Link>
          <Link href="/dashboard/documents" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors">
            <FileText className="w-5 h-5" /> Документы
          </Link>
          <button className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors cursor-not-allowed opacity-70">
            <div className="flex items-center gap-3"><MessageCircle className="w-5 h-5" /> Чат с ментором</div>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold uppercase">Скоро</span>
          </button>
          <Link href="/dashboard/payments" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition-colors">
            <Wallet className="w-5 h-5" /> Оплата
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Выйти
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
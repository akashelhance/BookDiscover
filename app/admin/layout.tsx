import type React from "react"
import Link from "next/link"
import { 
  Settings, 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Tags,
  LogOut,
  Bell
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex md:flex-col flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center space-x-2 text-emerald-600">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg font-bold text-gray-900 tracking-tight">Admin<span className="text-emerald-600">Discover</span></span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Menu</div>
          
          <Link href="/admin" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors group">
            <LayoutDashboard className="mr-3 h-5 w-5 text-gray-400 group-hover:text-emerald-500" />
            Dashboard
          </Link>
          
          <Link href="/admin/books" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors group">
            <BookOpen className="mr-3 h-5 w-5 text-gray-400 group-hover:text-emerald-500" />
            Books
          </Link>

          <Link href="/admin/categories" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors group">
            <Tags className="mr-3 h-5 w-5 text-gray-400 group-hover:text-emerald-500" />
            Categories
          </Link>

          <Link href="/admin/people" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors group">
            <Users className="mr-3 h-5 w-5 text-gray-400 group-hover:text-emerald-500" />
            People
          </Link>
          
          <div className="pt-6 mt-6 border-t border-gray-100">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">System</div>
            <Link href="/admin/settings" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg bg-emerald-50 text-emerald-700 group">
              <Settings className="mr-3 h-5 w-5 text-emerald-600" />
              Global Settings
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <LogOut className="mr-3 h-5 w-5 text-gray-400" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 flex-shrink-0 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex-1 flex items-center">
            {/* Mobile menu button could go here */}
            <h1 className="text-xl font-semibold text-gray-800 hidden sm:block">Settings</h1>
          </div>
          
          <div className="ml-4 flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100 transition-colors relative">
              <span className="sr-only">View notifications</span>
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

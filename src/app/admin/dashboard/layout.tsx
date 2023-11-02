// components/DashboardLayout.tsx
"use client";
// components/DashboardLayout.tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathName = usePathname();
  const router = useRouter();

  const onLogout = async () => {
    const logout = await axios.get("/api/admin/logout");
    router.push("/admin");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="bg-blue-500 w-64 p-4 overflow-y-auto fixed left-0 top-0 h-full">
        {/* Logo */}
        <div className="flex items-center mb-4">
          <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Sidebar content */}
        <ul>
          <li className="mb-2">
            <Link href="/admin/dashboard">
              <span
                className={
                  pathName === "/admin/dashboard"
                    ? "text-white font-bold"
                    : "text-white"
                }
              >
                Dashboard Home
              </span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/admin/dashboard/blog">
              <span
                className={
                  pathName === "/admin/dashboard/blog"
                    ? "text-white font-bold"
                    : "text-white"
                }
              >
                Add Blog
              </span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/page2">
              <span
                className={
                  pathName === "/dashboard/page2"
                    ? "text-white font-bold"
                    : "text-white"
                }
              >
                Page 2
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4  top-0 w-full flex justify-between items-center">
          <div className="flex items-center">
            {/* User Info */}
            <span className="text-gray-700">Welcome, User!</span>
          </div>
          <div className="flex items-center">
            {/* User Info */}
            <span className="text-red-700 cursor-pointer" onClick={onLogout}>
              Logout
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 mt-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

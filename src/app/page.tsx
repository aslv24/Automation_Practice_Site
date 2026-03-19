"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import {
  FaBell,
  FaCalendarAlt,
  FaCheckSquare,
  FaList,
  FaUpload,
  FaWpforms,
  FaWindowMaximize,
} from "react-icons/fa";

import {
  MdOutlineRadioButtonChecked,
  MdMouse,
  MdTableChart,
  MdOutlineWeb,
} from "react-icons/md";

import { BsClock } from "react-icons/bs";

// ✅ Client-only components
const NotificationPermission = dynamic(
  () => import("@/components/layout/NotificationPermission"),
  { ssr: false }
);

const LeadPopup = dynamic(
  () => import("@/components/layout/LeadPopup"),
  { ssr: false }
);

// ✅ Module Config (Single Source of Truth)
const modules = [
  { name: "Alerts", icon: FaBell, color: "bg-red-100 text-red-600", link: "/alerts" },
  { name: "Calendar", icon: FaCalendarAlt, color: "bg-purple-100 text-purple-600", link: "/calendar" },
  { name: "Checkbox", icon: FaCheckSquare, color: "bg-green-100 text-green-600", link: "/checkbox" },
  { name: "Dropdown", icon: FaList, color: "bg-blue-100 text-blue-600", link: "/dropdown" },
  { name: "File Upload", icon: FaUpload, color: "bg-yellow-100 text-yellow-600", link: "/file-upload" },
  { name: "Forms", icon: FaWpforms, color: "bg-indigo-100 text-indigo-600", link: "/forms" },
  { name: "Frames", icon: MdOutlineWeb, color: "bg-pink-100 text-pink-600", link: "/frames" },
  { name: "Mouse Events", icon: MdMouse, color: "bg-orange-100 text-orange-600", link: "/mouse" },
  { name: "Radio Button", icon: MdOutlineRadioButtonChecked, color: "bg-teal-100 text-teal-600", link: "/radiobutton" },
  { name: "Suggestion List", icon: MdTableChart, color: "bg-cyan-100 text-cyan-600", link: "/suggestion-list" },
  { name: "Waits", icon: BsClock, color: "bg-gray-100 text-gray-600", link: "/waits" },
  { name: "Windows", icon: FaWindowMaximize, color: "bg-rose-100 text-rose-600", link: "/windows" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">

      {/* Client-only Features */}
      <NotificationPermission />
      <LeadPopup />

      {/* Header */}
      <h1 className="text-4xl font-semibold text-center mb-12">
        Selenium Practice Dashboard
      </h1>

      <div className="max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <Link key={module.name} href={module.link}>
                <div
                  data-testid={`card-${module.name}`}
                  className="group h-36 flex flex-col items-center justify-center rounded-xl bg-white shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div
                    className={`text-3xl mb-3 p-3 rounded-full ${module.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <p className="text-base font-medium text-gray-700 group-hover:text-black">
                    {module.name}
                  </p>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}
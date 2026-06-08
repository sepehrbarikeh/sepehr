"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import {
  Home,
  Users,
  CreditCard,
  Calendar,
  Settings,
} from "lucide-react";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [glassMod, setGlassMod] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, href: "#" },
    { name: "Teams", icon: Users, href: "#" },
    { name: "Payments", icon: CreditCard, href: "#" },
    { name: "Attendance", icon: Calendar, href: "#" },
    { name: "Settings", icon: Settings, href: "#" }
  ];

  return (
    <aside
      className={`
        ${glassMod ? "bg-white/5 shadow-[0_8px_32px_0_rgba(247,247,247,30%);] backdrop-blur-none rounded-[10px]" : "bg-neutral-800"}
        p-4
        rounded-xl
        m-4
        shadow-2xl
        transition-all
        duration-300
        ease-in-out
        flex
        flex-col
        justify-between
        relative
        overflow-hidden
        ${isOpen ? "w-64 " : "w-20"}
      `}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      <div>
        {/* Logo Section */}
        <div className="flex items-center p-2 mb-8 mt-2 rounded-xl">
          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          </div>
          <span
            className={`
              text-xl font-semibold whitespace-nowrap transition-all duration-300
              ${isOpen ? 'opacity-100 w-auto ml-2' : 'opacity-0 w-0 ml-0'}
              overflow-hidden
            `}
            style={{ display: 'inline-block' }}
          >
            Teams.co
          </span>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  flex items-center p-3 rounded-xl transition-all duration-300 group
                  ${isActive ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-700'}
                `}
              >
                <div className={`${isActive ? "bg-green-500 w-1 h-6 rounded-tl-full rounded-bl-full " : ""} ${isOpen ? "ml-1" : ""} `}></div>
                <item.icon className={`w-6 h-6 flex-shrink-0 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'} transition-colors duration-200`} />
                <span
                  className={`
                    mr-4 whitespace-nowrap transition-all duration-300
                    ${isOpen ? 'opacity-100 w-auto ml-4' : 'opacity-0 w-0 ml-0'}
                    overflow-hidden
                     ${isActive ? ' text-gray-200' : 'text-gray-400'}
                  `}
                  style={{ display: 'inline-block' }}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}

        </nav>
      </div>
      {isOpen && (
        <div className="flex justify-center my-4">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <span className="font-medium text-sm text-white tracking-wide">Glass Mode</span>
            <span className="relative inline-block w-11 align-middle select-none transition-all">
              <input
                type="checkbox"
                checked={glassMod}
                onChange={() => setGlassMod((prev) => !prev)}
                className="sr-only peer"
              />
              <span
                className={
                  `block h-6 rounded-full transition-colors duration-300 border peer-focus:ring-2 peer-focus:ring-purple-400 ` +
                  (glassMod ? 'bg-purple-500 border-purple-500' : 'bg-gray-400 border-gray-400')
                }
                style={{ width: '44px' }}
              ></span>
              <span
                className={
                  `absolute top-0 left-0 w-6 h-6 bg-white border rounded-full shadow-sm transition-transform duration-300 ` +
                  (glassMod ? 'translate-x-5 border-purple-500' : 'translate-x-0 border-gray-300')
                }
                style={{ boxShadow: '0 2px 6px 0 rgba(0,0,0,0.10)' }}
              ></span>
            </span>
          </label>
        </div>
      )}
    
    </aside>
  );
} 
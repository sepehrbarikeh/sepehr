import { useState, useEffect } from "react"
import { Disclosure, Switch } from "@headlessui/react"
import { Home, FileText, Search, X, Menu, Info, Folder, Moon, Sun } from "lucide-react"
import ActiveLink from "./activeLink"
import Cookies from 'js-cookie';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NAV_ITEMS = [
  { name: 'خانه', href: '/', icon: <Home className="h-6 w-6 ml-2" /> },
  { name: 'پروژه‌ها', href: '/project', icon: <Folder className="h-6 w-6 ml-2" /> },
  { name: 'مقالات', href: '/articles', icon: <FileText className="h-6 w-6 ml-2" /> },
  { name: 'درباره من', href: '/about', icon: <Info className="h-6 w-6 ml-2" /> },
];

const Nav = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = Cookies.get('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    Cookies.set('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setWidth(scrolled);

    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full max-w-6xl mx-auto px-2 md:px-6">
      <Disclosure as="nav" className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg">
        {({ open }) => (
          <>
            <div className="flex h-16 items-center justify-between px-2 md:px-6">
              {/* Brand */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-sky-600 dark:text-sky-400 select-none" style={{ fontFamily: 'vazir-bold' }}>Sepehr</span>
              </div>
              {/* Desktop Nav */}
              <nav className="hidden lg:flex gap-2">
                {NAV_ITEMS.map(item => (
                  <ActiveLink key={item.name} href={item.href} className={
                    'flex items-center gap-1 px-4 py-2 rounded-lg font-bold text-base transition-all duration-150 ' +
                    'hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-sky-800 dark:hover:text-sky-300 ' +
                    'text-gray-700 dark:text-slate-200'
                  }>
                    {({ active }) => (
                      <>
                        <span className={active ? 'text-sky-500 dark:text-sky-400' : ''}>{item.icon}</span>
                        <span className={active ? 'text-sky-600 dark:text-sky-300' : ''}>{item.name}</span>
                      </>
                    )}
                  </ActiveLink>
                ))}
              </nav>
              {/* Search & Theme Switch */}
              <div className="flex items-center gap-4">
                <div className="relative w-36 md:w-56">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-xl border-0 bg-white/80 dark:bg-slate-800/80 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-200 dark:ring-slate-700 placeholder:text-gray-400 focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-600 shadow-sm transition"
                    placeholder="جستجو"
                    type="search"
                  />
                </div>
                <Switch
                  dir="ltr"
                  checked={darkMode}
                  onChange={setDarkMode}
                  className={classNames(
                    darkMode ? 'bg-sky-600' : 'bg-gray-200',
                    'relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2'
                  )}
                >
                  <span
                    className={classNames(
                      darkMode ? 'translate-x-7' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  >
                    <span
                      className={classNames(
                        darkMode ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    >
                      <Sun className="text-yellow-400 h-6 w-6" />
                    </span>
                    <span
                      className={classNames(
                        darkMode ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    >
                      <Moon className="text-sky-400 h-6 w-6" />
                    </span>
                  </span>
                </Switch>
                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-sky-100 dark:hover:bg-sky-800 hover:text-sky-600 dark:hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <X className="block h-6 w-6" />
                    ) : (
                      <Menu className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            {/* Mobile Nav */}
            <Disclosure.Panel className="lg:hidden px-4 pb-4 pt-2">
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map(item => (
                  <ActiveLink key={item.name} href={item.href} className={
                    'flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-base transition-all duration-150 ' +
                    'hover:bg-sky-100 hover:text-sky-700 dark:hover:bg-sky-800 dark:hover:text-sky-300 ' +
                    'text-gray-700 dark:text-slate-200'
                  }>
                    {({ active }) => (
                      <>
                        <span className={active ? 'text-sky-500 dark:text-sky-400' : ''}>{item.icon}</span>
                        <span className={active ? 'text-sky-600 dark:text-sky-300' : ''}>{item.name}</span>
                      </>
                    )}
                  </ActiveLink>
                ))}
              </nav>
            </Disclosure.Panel>
            <div className=" fixed top-0 left-0 w-full h-1  bg-transparent z-50">
              <div
                className="h-full rounded-full bg-sky-500 transition-colors duration-300"
                style={{ width: `${width}%` }}
              />
            </div>
          </>
        )}
      </Disclosure>
    </header>
  )
}

export default Nav

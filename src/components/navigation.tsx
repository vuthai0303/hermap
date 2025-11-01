"use client";

import { usePathname } from "next/navigation";

export function Navigation({isMd = false}) {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "RESOURCES",
      active: pathname === "/",
    },
    {
      href: "/map",
      label: "MAP",
      active: pathname === "/map",
    },
    {
      href: "/share",
      label: "SHARE",
      active: pathname === "/share",
    },
    {
      href: "/solutions",
      label: "SOLUTIONS",
      active: pathname === "/solutions",
    },
  ];

  return (
    <div className="flex items-center gap-5">
      {routes.map((route) => (
        <li key={route.href} className={`${!isMd && "border border-black/40 rounded-md text-black"} ${route.active && "border-primary bg-primary"}`}>
          {route.active ? (
            <div
              key={route.href}
              className={`text-sm font-medium ${route.active && "text-white hover:text-white"}`}
            >
              {route.label}
            </div>
          ) : (
              <a
                key={route.href}
                href={route.href}
                className={`text-sm font-medium ${!isMd && "hover:text-black"} ${route.active && "text-white hover:text-white"}`}
              >
                {route.label}
              </a>
          )}
          
        </li>
      ))}
    </div>
  );
}

import { Navigation } from "./navigation";


export function Header() {
    return (
        <div className="w-full h-[65px] min-h-[65px] max-h-[65px] flex justify-center items-center z-1000 bg-transparent">
            <nav className="navbar bg-transparent flex w-full items-center justify-between gap-2">
                <div className="navbar-start max-md:w-1/4 justify-end items-center gap-2 pr-5">
                    
                    <span className="text-black text-3xl font-bold no-underline">
                        HerMap
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="#000" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5" />
                    </svg>
                </div>
                <div className="navbar-center max-md:hidden">
                    <ul className="menu menu-horizontal p-0 font-medium">
                        <Navigation isMd={false} />
                    </ul>
                </div>
                <div className="navbar-end items-center gap-4">
                    <div className="dropdown relative inline-flex md:hidden">
                        <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                            <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                            <Navigation isMd={true} />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
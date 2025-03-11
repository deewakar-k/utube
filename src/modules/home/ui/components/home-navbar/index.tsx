import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white flex items-center justify-between px-4">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/" className="text-xl font-medium tracking-tight p-4">
            uTube
          </Link>
        </div>

        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>

        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export { HomeNavbar };

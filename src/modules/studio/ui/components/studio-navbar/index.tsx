import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { StudioUploadModal } from "./studio-upload-modal";

const StudioNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center flex-shrink-0">
          <div className="relative z-50">
            <SidebarTrigger />
          </div>
          <Link
            href="/studio"
            className="text-xl font-medium tracking-tight p-4"
          >
            Studio
          </Link>
        </div>
        <div className="flex-1" />
        <div className="flex-shrink-0 items-center flex gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export { StudioNavbar };

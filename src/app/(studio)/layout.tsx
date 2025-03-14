import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layouts";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <StudioLayout>{children}</StudioLayout>;
}

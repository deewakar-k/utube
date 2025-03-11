import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

const AuthButton = () => {
  return (
    <Button variant="outline" className="cursor-pointer rounded-full">
      <UserCircleIcon />
      Sign In
    </Button>
  );
};

export { AuthButton };

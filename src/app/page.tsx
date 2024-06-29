import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
}



import General from "@/components/custom/Cards/General";
import { Button } from "@/components/ui/button";
import LoginView from "@/screens/login/LoginView";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {


  return (
    <div>
      {/* <General /> */}
      <LoginView />
    </div>
  );
}

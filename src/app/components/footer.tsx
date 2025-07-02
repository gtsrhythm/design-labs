import { Mail, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">© 2025 Design Labs. All rights reserved.</p>
        <div className="flex space-x-4">
          <Button variant="ghost" className="p-2">
            <Mail className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="p-2">
            <Github className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
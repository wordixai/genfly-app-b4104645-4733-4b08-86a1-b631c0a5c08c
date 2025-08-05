import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">O</span>
          </div>
          <span className="font-semibold text-lg">OpenRouter</span>
        </div>
      </div>

      <div className="flex items-center gap-1 max-w-md w-full mx-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-10 bg-muted/50 border-0 focus:bg-background"
          />
        </div>
      </div>

      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Models
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Chat
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Rankings
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Enterprise
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Docs
        </a>
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
      </nav>
    </header>
  );
};

export default Header;
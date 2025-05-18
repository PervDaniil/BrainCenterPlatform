import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


export default function SearchInput() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search" className="pl-12 rounded-full" />
    </div>
  )
}
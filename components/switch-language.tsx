"use client"

import { useEffect, useState } from "react";
import { Input } from "@/components//ui/input";
import { Button } from "@/components/ui/button";
import { LANGUAGES } from '@/constants/languages';
import { LanguagesIcon, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export default function SwitchLanguageButton() {
    const [search, setSearch] = useState("");
    const [lang, setLang] = useState<string>("en");

    const filteredLanguages = LANGUAGES.filter((language) =>
        language.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleChangeLanguage = (lang: string) => {
        const URL = `https://pervdaniil-github-io.translate.goog/BrainCenterPlatform/?_x_tr_sl=auto&_x_tr_tl=${lang}&_x_tr_hl=${lang}&_x_tr_pto=wapp&_x_tr_hist=true#dashboard`;
        window.location.href = URL;
    }

    useEffect(() => {
        if (lang !== 'en') {
            handleChangeLanguage(lang);
        }
    }, [lang]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost">
                    <LanguagesIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full lg:w-56">
                <div className="relative py-2 px-1">
                    <Search className="cursor-pointer absolute left-5 top-4 w-4" />
                    <Input
                        placeholder="Search language..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 rounded-full text-sm"
                    />
                </div>
                <div className="max-h-60 overflow-y-auto">
                    {filteredLanguages.map((language, index) => (
                        <DropdownMenuItem
                            className="cursor-pointer"
                            key={index}
                            onClick={() => handleChangeLanguage(language.lang)}
                        >
                            {language.title}
                        </DropdownMenuItem>
                    ))}
                    {filteredLanguages.length === 0 && (
                        <DropdownMenuItem disabled>No results found</DropdownMenuItem>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
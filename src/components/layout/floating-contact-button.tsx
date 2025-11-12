
"use client";

import { MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ServiceRequestForm } from "@/components/sections/service-request-form";
import Link from "next/link";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { useState } from "react";

export function FloatingContactButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon" className="rounded-full w-14 h-14 bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-transform duration-300 transform hover:scale-110">
            <MessageSquare className="h-7 w-7" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2" align="end">
          <div className="flex flex-col gap-2">
            <Button asChild variant="ghost" className="justify-start gap-3 px-4 py-2">
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="h-5 w-5 text-green-500" />
                <span>WhatsApp</span>
              </Link>
            </Button>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="justify-start gap-3 px-4 py-2">
                        <Mail className="h-5 w-5" />
                        <span>Contact Form</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="p-0">
                    <ServiceRequestForm serviceName="General Inquiry" />
                </DialogContent>
            </Dialog>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

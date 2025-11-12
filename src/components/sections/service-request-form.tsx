
"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Request"
      )}
    </Button>
  );
}

export function ServiceRequestForm({ serviceName }: { serviceName: string }) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    status: "idle",
    message: "",
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === "error" && state.message) {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <>
      <SheetHeader className="px-6 pt-6 pb-4">
        <SheetTitle className="font-headline text-2xl text-primary">Request a Consultation</SheetTitle>
        <SheetDescription>
          Interested in our <span className="font-semibold text-accent">{serviceName}</span> service? Fill out the form below and we'll get in touch.
        </SheetDescription>
      </SheetHeader>
      <div className="p-6">
        <form ref={formRef} action={formAction} className="space-y-4">
          <input type="hidden" name="service" value={serviceName} />
          <input type="hidden" name="context" value="Service Request Form" />

          <div className="space-y-2">
            <Label htmlFor="name_req">Name</Label>
            <Input id="name_req" name="name" placeholder="Your Name" required />
            {state.errors?.name && (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email_req">Email</Label>
            <Input
              id="email_req"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
            {state.errors?.email && (
              <p className="text-sm text-destructive">{state.errors.email[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company_req">Company (Optional)</Label>
            <Input id="company_req" name="company" placeholder="Your Company" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message_req">Message</Label>
            <Textarea
              id="message_req"
              name="message"
              placeholder={`Tell us a bit about your project or what you're hoping to achieve with ${serviceName}...`}
              rows={5}
              required
            />
            {state.errors?.message && (
              <p className="text-sm text-destructive">{state.errors.message[0]}</p>
            )}
          </div>
          <SubmitButton pending={isPending} />
        </form>
      </div>
    </>
  );
}

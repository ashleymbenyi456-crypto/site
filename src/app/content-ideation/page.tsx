"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateContentIdeas } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { Loader2, Lightbulb, Rss, Youtube, Podcast } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  topic: z.string(),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        "Generate Ideas"
      )}
    </Button>
  );
}

const platformIcons: { [key: string]: React.ElementType } = {
  Blog: Rss,
  YouTube: Youtube,
  "Social Media": Lightbulb,
  Podcast: Podcast,
  "Live Video": Lightbulb,
};


export default function ContentIdeationPage() {
  const [state, formAction] = useFormState(generateContentIdeas, {
    status: "idle",
    message: "",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { topic: "" },
  });

  useEffect(() => {
    if (state.status === "success") {
      form.reset();
    }
  }, [state.status, form]);

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">
          Content Ideation Tool
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Enter an industry or topic to generate creative content ideas powered by AI.
        </p>
      </header>

      <Card className="mb-12 shadow-lg">
        <CardContent className="p-6">
          <form action={formAction} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <Label htmlFor="topic" className="sr-only">Your Industry or Topic</Label>
                <Input
                  id="topic"
                  name="topic"
                  placeholder="e.g., 'sustainable fashion', 'fintech startups', 'healthy cooking'"
                  className="h-12 text-base"
                />
              </div>
              <SubmitButton />
            </div>
            {state.status === "error" && state.errors?.topic && (
                <p className="text-sm font-medium text-destructive">{state.errors.topic[0]}</p>
            )}
             {state.status === "error" && !state.errors && (
                <p className="text-sm font-medium text-destructive">{state.message}</p>
            )}
          </form>
        </CardContent>
      </Card>

      {state.ideas && state.ideas.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">
            Your Generated Ideas
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {state.ideas.map((idea, index) => {
              const Icon = platformIcons[idea.platform] || Lightbulb;
              return (
                <Card key={index} className="flex flex-col transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl pr-4">{idea.title}</CardTitle>
                        <Badge variant="secondary" className="flex-shrink-0">
                            <Icon className="mr-1.5 h-4 w-4" />
                            {idea.platform}
                        </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{idea.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

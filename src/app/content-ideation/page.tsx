"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateContentIdeas } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useEffect } from "react";
import { Loader2, Lightbulb, Rss, Youtube, Podcast, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Ideas
        </>
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

  useEffect(() => {
    if (state.status === "success") {
       // We can keep the topic in the input if we want
    }
  }, [state.status]);

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline">
          AI Content Ideation
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Stuck in a creative rut? Enter an industry or topic to generate a list of engaging content ideas powered by generative AI.
        </p>
      </header>

      <Card className="mb-12 shadow-lg bg-secondary/30">
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

      {state.status === 'loading' && (
        <div className="flex justify-center items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {state.ideas && state.ideas.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 font-headline text-primary">
            Your Generated Ideas
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {state.ideas.map((idea, index) => {
              const Icon = platformIcons[idea.platform] || Lightbulb;
              return (
                <Card key={index} className="flex flex-col transition-all hover:shadow-xl bg-background">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-xl pr-4 font-headline">{idea.title}</CardTitle>
                        <Badge variant="secondary" className="flex-shrink-0 bg-accent/10 text-accent-foreground border-accent/20">
                            <Icon className="mr-1.5 h-4 w-4 text-accent" />
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

"use server";

import { run } from "@genkit-ai/next/server";
import { contentIdeationFlow } from "@/ai/flows/content-ideation";
import { z } from "zod";

const ideationSchema = z.object({
  topic: z
    .string()
    .min(3, "Topic must be at least 3 characters long.")
    .max(100, "Topic must be 100 characters or less."),
});

type Idea = {
  title: string;
  description: string;
  platform: string;
};

type IdeationState = {
  status: "idle" | "success" | "error" | "loading";
  message: string;
  errors?: {
    topic?: string[];
  };
  ideas?: Idea[];
};

export async function generateContentIdeas(
  prevState: IdeationState,
  formData: FormData
): Promise<IdeationState> {
  const validatedFields = ideationSchema.safeParse({
    topic: formData.get("topic"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Invalid topic provided.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const ideas = await run(contentIdeationFlow, {
      topic: validatedFields.data.topic,
    });
    return {
      status: "success",
      message: "Ideas generated successfully.",
      ideas: ideas,
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Failed to generate ideas. Please try again later.",
    };
  }
}

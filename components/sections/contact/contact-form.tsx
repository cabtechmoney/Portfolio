"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "@/components/ui/icons";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function updateField<K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K]
  ): void {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    setSubmitState(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Unable to send your message.");
      }

      setForm(INITIAL_FORM);
      setSubmitState({
        type: "success",
        message: "Your message has been received. I will get back to you soon.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-border
        bg-background/60
        p-8
        backdrop-blur-xl
      "
    >
      <div className="grid gap-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              outline-none
              transition-colors
              focus:border-cyan-500
            "
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              outline-none
              transition-colors
              focus:border-cyan-500
            "
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            required
            value={form.subject}
            onChange={(event) =>
              updateField("subject", event.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              outline-none
              transition-colors
              focus:border-cyan-500
            "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium"
          >
            Message
          </label>

          <textarea
            id="message"
            required
            rows={6}
            value={form.message}
            onChange={(event) =>
              updateField("message", event.target.value)
            }
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              outline-none
              transition-colors
              focus:border-cyan-500
            "
          />
        </div>

        {submitState && (
          <p
            className={
              submitState.type === "success"
                ? "rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600"
                : "rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600"
            }
          >
            {submitState.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-sky-500
            px-6
            py-3
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/20
            transition-all
            hover:shadow-cyan-500/40
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}

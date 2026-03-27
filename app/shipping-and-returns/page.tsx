import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ShippingAndReturnsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-24">
        <Button asChild variant="outline" className="mb-10 w-fit text-sm uppercase tracking-widest font-medium">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back
          </Link>
        </Button>

        <div className="space-y-6 border border-border bg-card px-8 py-10">
          <h1 className="text-3xl font-mono font-bold tracking-tight md:text-4xl">
            Shipping and Returns
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            We offer free pickup at the specified location (contact us for details). Unfortunately, orders cannot be returned or exchanged unless defective.
          </p>
        </div>
      </section>
    </main>
  );
}

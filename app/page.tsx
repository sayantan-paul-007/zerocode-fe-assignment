import Themetoggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="text-primary bg-background min-h-screen flex flex-col items-center justify-center p-4">
      <Themetoggle />
      <h1 className="text-3xl font-bold underline">
        Welcome to Next.js!
      </h1>
      <p className="text-lg">
        This is a simple example of a Next.js application with a theme toggle.
      </p>
    </main>
  );
}

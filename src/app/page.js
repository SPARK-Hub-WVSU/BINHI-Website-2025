import LinkButton from "@/components/LinkButton";


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">This is a simple Next.js application.</p>

      <LinkButton href="/">Incubate your startup with us</LinkButton>
    </div>
  );
}

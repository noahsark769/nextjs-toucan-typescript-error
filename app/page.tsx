import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    document.body.append(script);
  }, []);

  return <h1>Hello, Next.js!</h1>;
}

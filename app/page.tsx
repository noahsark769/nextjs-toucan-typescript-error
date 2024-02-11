import { useEffect } from "react";
import { Toucan } from "toucan-js";

export default function Page() {
  const sentry = new Toucan({
    dsn: "",
    request: undefined,
  });
  sentry.captureException(new Error("Hello"));
  useEffect(() => {
    const script = document.createElement("script");
    document.body.append(script);
  }, []);

  return <h1>Hello, Next.js!</h1>;
}

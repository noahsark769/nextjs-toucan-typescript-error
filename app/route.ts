import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { Toucan } from "toucan-js";

export async function GET(req: NextRequest) {
  const sentry = new Toucan({
    dsn: "",
    request: req,
  });
  sentry.captureException(new Error("Hello"));
  return NextResponse.json({ hello: true });
}

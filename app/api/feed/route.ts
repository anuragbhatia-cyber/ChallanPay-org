import { getPage } from "@/lib/articles";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cursor = Number(searchParams.get("cursor") ?? "0");
  const page = getPage(cursor);
  // simulate a tiny network delay for a nicer loading UX
  await new Promise((r) => setTimeout(r, 350));
  return Response.json(page);
}

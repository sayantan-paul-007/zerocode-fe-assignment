export async function GET() {
  return Response.json({
    key: process.env.JWT_SECRET ?? "undefined",
  });
}

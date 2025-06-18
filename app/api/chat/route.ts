import { NextRequest, NextResponse } from 'next/server';
import { getGeminiResponse } from '@/lib/llm';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'No message provided' }, { status: 400 });
  }

  const reply = await getGeminiResponse(message);

  return NextResponse.json({ reply });
}
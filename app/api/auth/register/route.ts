import { NextResponse } from 'next/server';
import { users } from '@/lib/userStore';
import { hashPassword, generateJWT, setTokenCookie } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const existing = users.find(u => u.email === email);
  if (existing) {
    return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
  }

  const newUser = {
    id: uuidv4(),
    email,
    passwordHash: hashPassword(password),
  };

  users.push(newUser);

  const token = generateJWT({ id: newUser.id, email: newUser.email });
  setTokenCookie(token);

  return NextResponse.json({ message: 'Registered successfully' });
}

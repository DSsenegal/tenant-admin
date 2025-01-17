import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const session = await auth();

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}

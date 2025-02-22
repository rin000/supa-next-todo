import { getTodos } from '@/actions/todo/todo.action';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const result = await getTodos();

  console.log('todo GET API income', result);

  return NextResponse.json({ ...result });
};

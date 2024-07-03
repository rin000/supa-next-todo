import { getUser } from '@/actions/auth/user.action';
import TodoContainer from './components/TodoContainer';

export default async function Home() {
  const user = await getUser();

  return (
    <main>
      <TodoContainer owerUserId={user?.id} />
    </main>
  );
}

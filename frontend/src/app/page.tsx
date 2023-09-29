import LoginForm from './components/LoginForm';
import { session } from "@/app/utils/session";

async function getSession() {
  const user = await session().get('user');
  return user;
}

export default async function Home() {
  const user = await getSession();
  console.log(user, "###### CURRENT SESSION ######");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  )
}

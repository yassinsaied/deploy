import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function UsersList() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {(error as Error).message}</p>;

  return (
    <ul className="p-5">
      {users?.map((user: any) => (
        <li key={user.id} className="border p-2 my-2 rounded">
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-5">
        <h1 className="text-xl font-bold">Liste des utilisateurs</h1>
        <UsersList />
      </div>
    </QueryClientProvider>
  );
}

export default App;

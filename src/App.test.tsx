import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ajoute cette ligne si elle n'est pas déjà présente
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

test('affiche le titre de la page', async () => {
	render(
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);

	const titleElement = await screen.findByText(/Liste des utilisateurs/i);
	expect(titleElement).toBeInTheDocument();
});

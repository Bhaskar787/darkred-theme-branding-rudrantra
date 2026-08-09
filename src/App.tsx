import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router as WouterRouter } from 'wouter';

import { Toaster } from '@/views/components/ui/toaster';
import { TooltipProvider } from '@/views/components/ui/tooltip';
import { UIProvider } from '@/models/context/UIContext';
import { CartProvider } from '@/models/context/CartContext';
import { WishlistProvider } from '@/models/context/WishlistContext';
import AppRouter from '@/controllers/routes/AppRouter';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <UIProvider>
          <CartProvider>
            <WishlistProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
                <AppRouter />
              </WouterRouter>
              <Toaster />
            </WishlistProvider>
          </CartProvider>
        </UIProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
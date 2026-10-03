import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  HeadContent,
  createRootRouteWithContext,
  type ErrorComponentProps,
} from "@tanstack/react-router";
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8">
      <h1 className="text-3xl font-bold">Seite nicht gefunden</h1>
      <Link to="/" search={{ ansicht: "fakten" }} className="text-primary underline">
        Zum Fahrzeugvergleich
      </Link>
    </div>
  ),
  errorComponent: ({ reset }: ErrorComponentProps) => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8">
      <h1 className="text-3xl font-bold">Der Vergleich konnte nicht geladen werden.</h1>
      <button onClick={reset} className="rounded bg-primary px-4 py-2 text-primary-foreground">
        Erneut versuchen
      </button>
    </div>
  ),
});
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <Outlet />
    </QueryClientProvider>
  );
}

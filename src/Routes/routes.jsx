const { Index } = require("../layout");

export const Routes = {
    path: '/portal',
    element: <Index />, // Main Layout for /portal
    // errorElement: <ErrorBoundary />, // Error Boundary for the entire portal route
    children: [
    //   { index: true, element: <Home /> }, // Default route for /portal
    //   { path: 'sync', element: <Sync /> }, // Route for /portal/sync
    //   { path: 'client-search', element: <ClientSearch /> }, // Route for /portal/client-search
    //   { path: 'center-search', element: <CenterSearch /> }, // Route for /portal/center-search
    //   { path: 'center-client-list', element: <ClientListCenter /> }, // Route for /portal/center-client-list
    //   { path: 'loan-amount', element: <LoanAmount /> } // Route for /portal/loan-amount
    ]
  };
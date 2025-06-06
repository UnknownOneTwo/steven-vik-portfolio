import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='text-center py-10 text-red-400'>
      <h2 className='text-xl font-semibold'>Something went wrong</h2>
      <button onClick={resetErrorBoundary} className='mt-4 px-4 py-2 bg-blue-600 rounded'>
        Try again
      </button>
    </div>
  );
}

export default function ErrorBoundaryWrapper({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

import { StrictMode, Component, type ErrorInfo, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

class BootErrorBoundary extends Component<{children: ReactNode},{error: Error | null}> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('VSI Finance & HR application error', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="boot">
          <div className="boot-card boot-error">
            <h2>VSI Finance & HR could not start</h2>
            <p>The application loaded, but an unexpected error stopped the interface.</p>
            <pre>{this.state.error.message}</pre>
            <button onClick={() => window.location.reload()}>Reload application</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = document.getElementById('root');
if (!root) throw new Error('Application root element was not found.');

createRoot(root).render(
  <StrictMode>
    <BootErrorBoundary>
      <App />
    </BootErrorBoundary>
  </StrictMode>
);

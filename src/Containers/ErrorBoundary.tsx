import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
  timer: number;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      timer: 10,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });

    // Optional: send error logs to an error tracking service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    console.log(error.message, errorInfo.componentStack);
    const timer = setInterval(
      () => this.setState({ timer: this.state.timer - 1 }),
      1000,
    );
    setTimeout(() => clearInterval(timer), 10000);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback or default with debug info
      return (
        this.props.fallback || (
          <div style={{ padding: "1rem", backgroundColor: "#ffeeee" }}>
            <h2>Something went wrong.</h2>
            <p>
              <strong>Error:</strong> {this.state.error?.message}
            </p>
            <details style={{ whiteSpace: "pre-wrap" }} open>
              {this.state.errorInfo?.componentStack}
            </details>
            <span>{this.state.timer}</span>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

/*
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('Caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error.message}</p>
          <details style={{ whiteSpace: 'pre-wrap' }} open>
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
*/

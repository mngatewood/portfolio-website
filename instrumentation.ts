import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = "https://a4944fe5d7c7e13a93d5e0e10f0f05be@o4508650504781824.ingest.us.sentry.io/4508650506944512";

let isInitialized = false;

export async function register() {
  if (isInitialized) {
    return;
  }

  // Skip during build phase
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return;
  }

  try {
    // Client-side initialization
    if (typeof window !== 'undefined') {
      Sentry.init({
        dsn: SENTRY_DSN,
        integrations: [
          new Sentry.BrowserTracing(),
          new Sentry.Replay({
            maskAllText: false,
            blockAllMedia: false,
          }),
        ],
        tracesSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
      });
    }
    // Server-side initialization
    else if (process.env.NEXT_RUNTIME === 'nodejs') {
      Sentry.init({
        dsn: SENTRY_DSN,
        tracesSampleRate: 1.0,
      });
    }
    // Edge runtime initialization
    else if (process.env.NEXT_RUNTIME === 'edge') {
      Sentry.init({
        dsn: SENTRY_DSN,
        tracesSampleRate: 1.0,
      });
    }

    isInitialized = true;
  } catch (error) {
    console.error('Sentry initialization failed:', error);
  }
}

export const onRequestError = Sentry.captureRequestError;
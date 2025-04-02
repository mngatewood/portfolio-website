import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = "https://a4944fe5d7c7e13a93d5e0e10f0f05be@o4508650504781824.ingest.us.sentry.io/4508650506944512";

let isInitialized = false;

export async function register() {
	// Ensure we're in the right environment
	if (process.env.NEXT_PHASE === 'phase-production-build' || !process.env.NEXT_PUBLIC_SENTRY_DSN) {
		return;
	}

	if (isInitialized) {
		return;
	}

	try {
		const config = {
			dsn: SENTRY_DSN,
			tracesSampleRate: 1.0,
			enabled: process.env.NODE_ENV === 'production',
			debug: process.env.NODE_ENV === 'development',
			environment: process.env.NODE_ENV,
		};

		// Initialize based on runtime environment
		if (typeof window !== 'undefined') {
			await Sentry.init(config);
		} else if (process.env.NEXT_RUNTIME === 'nodejs') {
			await Sentry.init(config);
		} else if (process.env.NEXT_RUNTIME === 'edge') {
			await Sentry.init(config);
		}

		isInitialized = true;
	} catch (error) {
		console.error('Sentry initialization failed:', error);
	}
}
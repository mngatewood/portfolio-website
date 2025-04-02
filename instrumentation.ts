import * as Sentry from '@sentry/nextjs';
import type { BrowserOptions, ErrorEvent } from '@sentry/nextjs';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

let isInitialized = false;

export function register() {
	if (isInitialized || process.env.NEXT_PHASE === 'phase-production-build') {
		return;
	}

	if (!SENTRY_DSN) {
		console.warn('Sentry DSN not found');
		return;
	}

	try {
		const config: BrowserOptions = {
			dsn: SENTRY_DSN,
			tracesSampleRate: 1.0,
			enabled: true,
			environment: process.env.NODE_ENV,
			integrations: [],
			beforeSend(event: ErrorEvent) {
				if (process.env.NODE_ENV === 'production' &&
					'exception' in event &&
					event.exception) {
					return event;
				}
				return null;
			},
		};

		if (typeof window !== 'undefined') {
			Sentry.init({
				...config,
				replaysSessionSampleRate: 0.1,
				replaysOnErrorSampleRate: 1.0,
			});
		} else {
			Sentry.init(config);
		}

		isInitialized = true;
	} catch (error) {
		console.error('Sentry initialization failed:', error);
	}
}
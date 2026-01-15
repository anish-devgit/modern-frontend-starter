export const checkEnv = (key: string, value?: string, isRequired = true): string => {
  if (isRequired && !value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value || ''
}

export const config = {
  app: {
    name: 'Modern Frontend Starter',
    version: '0.0.0',
    description: 'Production-ready React starter kit',
  },
  api: {
    baseUrl: checkEnv('VITE_API_URL', import.meta.env.VITE_API_URL),
  },
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },
} as const

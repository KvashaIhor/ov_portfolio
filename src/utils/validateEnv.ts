export const validateEnvVars = () => {
  const requiredVars = [
    'REACT_APP_TELEGRAM_BOT_TOKEN',
    'REACT_APP_TELEGRAM_CHAT_ID'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    console.error('Please check your .env file and ensure all required variables are set.');
    return false;
  }

  return true;
};

if (process.env.NODE_ENV === 'development') {
  validateEnvVars();
}
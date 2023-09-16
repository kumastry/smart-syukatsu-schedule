import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'smart-syukatsu-schedule-frontend',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

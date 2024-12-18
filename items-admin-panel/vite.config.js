import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react()],
  };

  if (mode === 'development') {

    config.server = {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, './ssl/localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, './ssl/localhost-cert.pem')),
      },
      host: 'localhost',
      port: 5173,
    };

  } else if (mode === 'production') {

    config.build = {
      outDir: 'dist',
    };
    
  }

  return config;
});


interface EnvWindow extends Window {
  env: {
	API_ENDPOINT: string;
  };
}

declare const window: EnvWindow;

export const endpoint = window.env.API_ENDPOINT || 'http://localhost:5000';

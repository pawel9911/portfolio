/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_EMAIL_JS_SERVICE_ID: string;
  readonly VITE_APP_EMAIL_JS_TEMPLATE_ID: string;
  readonly VITE_APP_EMAIL_JS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

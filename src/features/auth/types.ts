export type AuthActionState =
  | {
      error?: string;
      message?: string;
      fieldErrors?: Record<string, string[]>;
    }
  | undefined;

export type OAuthProvider = "github" | "google";

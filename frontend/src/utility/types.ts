//redux auth slice
export interface AuthState {
  error: string | null;
  user: any | null;
  isLoading: boolean;
}

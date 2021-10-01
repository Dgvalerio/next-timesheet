import 'react-redux';
import type { UIState } from './ui/slice';

declare module 'react-redux' {
  export interface DefaultRootState {
    ui: UIState;
  }
}

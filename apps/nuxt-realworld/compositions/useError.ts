import { reactive } from '@nuxtjs/composition-api';
import { CustomErrors } from '@/types';

type State = Partial<CustomErrors>;

export default function useError() {
  const state = reactive<State>({
    errors: undefined,
  });

  const setError = (errors: State['errors']) => {
    state.errors = errors;
  };

  return {
    state,
    setError,
  };
}

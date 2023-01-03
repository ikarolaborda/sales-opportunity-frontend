import { createSelector } from 'reselect';

const selectRaw = (state) => state.userType.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const userTypeDestroySelectors = {
  selectLoading,
};

export default userTypeDestroySelectors;

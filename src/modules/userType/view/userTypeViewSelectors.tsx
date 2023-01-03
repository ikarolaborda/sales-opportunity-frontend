import { createSelector } from 'reselect';

const selectRaw = (state) => state.userType.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const userTypeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default userTypeViewSelectors;

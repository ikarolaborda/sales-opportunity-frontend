import { createSelector } from 'reselect';

const selectRaw = (state) => state.salesOpportunities.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const salesOpportunitiesDestroySelectors = {
  selectLoading,
};

export default salesOpportunitiesDestroySelectors;

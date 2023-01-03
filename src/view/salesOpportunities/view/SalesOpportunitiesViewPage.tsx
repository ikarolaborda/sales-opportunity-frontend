import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/salesOpportunities/view/salesOpportunitiesViewActions';
import selectors from 'src/modules/salesOpportunities/view/salesOpportunitiesViewSelectors';
import SalesOpportunitiesView from 'src/view/salesOpportunities/view/SalesOpportunitiesView';
import SalesOpportunitiesViewToolbar from 'src/view/salesOpportunities/view/SalesOpportunitiesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SalesOpportunitiesPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.salesOpportunities.menu'), '/sales-opportunities'],
          [i18n('entities.salesOpportunities.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.salesOpportunities.view.title')}
        </PageTitle>

        <SalesOpportunitiesViewToolbar match={match} />

        <SalesOpportunitiesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default SalesOpportunitiesPage;

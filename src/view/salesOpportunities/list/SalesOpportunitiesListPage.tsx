import React from 'react';
import { i18n } from 'src/i18n';
import SalesOpportunitiesListFilter from 'src/view/salesOpportunities/list/SalesOpportunitiesListFilter';
import SalesOpportunitiesListTable from 'src/view/salesOpportunities/list/SalesOpportunitiesListTable';
import SalesOpportunitiesListToolbar from 'src/view/salesOpportunities/list/SalesOpportunitiesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SalesOpportunitiesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.salesOpportunities.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.salesOpportunities.list.title')}
        </PageTitle>

        <SalesOpportunitiesListToolbar />
        <SalesOpportunitiesListFilter />
        <SalesOpportunitiesListTable />
      </ContentWrapper>
    </>
  );
}

export default SalesOpportunitiesListPage;

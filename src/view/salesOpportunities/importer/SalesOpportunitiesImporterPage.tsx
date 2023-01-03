import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/salesOpportunities/importer/salesOpportunitiesImporterActions';
import fields from 'src/modules/salesOpportunities/importer/salesOpportunitiesImporterFields';
import selectors from 'src/modules/salesOpportunities/importer/salesOpportunitiesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SalesOpportunitiesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.salesOpportunities.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.salesOpportunities.menu'), '/sales-opportunities'],
          [i18n('entities.salesOpportunities.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.salesOpportunities.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SalesOpportunitiesImportPage;

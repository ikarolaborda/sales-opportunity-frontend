import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/userType/importer/userTypeImporterActions';
import fields from 'src/modules/userType/importer/userTypeImporterFields';
import selectors from 'src/modules/userType/importer/userTypeImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function UserTypeImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.userType.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.userType.menu'), '/user-type'],
          [i18n('entities.userType.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.userType.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default UserTypeImportPage;

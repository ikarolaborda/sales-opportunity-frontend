import React from 'react';
import { i18n } from 'src/i18n';
import UserTypeListFilter from 'src/view/userType/list/UserTypeListFilter';
import UserTypeListTable from 'src/view/userType/list/UserTypeListTable';
import UserTypeListToolbar from 'src/view/userType/list/UserTypeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function UserTypeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.userType.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.userType.list.title')}
        </PageTitle>

        <UserTypeListToolbar />
        <UserTypeListFilter />
        <UserTypeListTable />
      </ContentWrapper>
    </>
  );
}

export default UserTypeListPage;

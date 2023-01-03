import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function UserTypeView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <UserViewItem
        label={i18n('entities.userType.fields.userId')}
        value={record.userId}
      />

      <TextViewItem
        label={i18n('entities.userType.fields.description')}
        value={record.description}
      />
    </ViewWrapper>
  );
}

export default UserTypeView;

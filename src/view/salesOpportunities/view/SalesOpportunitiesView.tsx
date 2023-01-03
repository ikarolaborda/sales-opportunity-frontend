import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';

function SalesOpportunitiesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <UserViewItem
        label={i18n('entities.salesOpportunities.fields.sellerId')}
        value={record.sellerId}
      />

      <ProductViewItem
        label={i18n('entities.salesOpportunities.fields.productId')}
        value={record.productId}
      />

      <UserViewItem
        label={i18n('entities.salesOpportunities.fields.clientId')}
        value={record.clientId}
      />
    </ViewWrapper>
  );
}

export default SalesOpportunitiesView;

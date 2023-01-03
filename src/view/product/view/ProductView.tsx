import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProductView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.product.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.product.fields.price')}
        value={record.price}
      />

      <TextViewItem
        label={i18n('entities.product.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.product.fields.slug')}
        value={record.slug}
      />
    </ViewWrapper>
  );
}

export default ProductView;

import React from 'react';
import { Card, Row } from 'antd';

function OwnerInfo({ data }) {
  return (
    <Card>
      <Row className='customRow'>
        <span className='text-dark'>Name:</span>
        <span>{data?.ownerObj?.name || 'Not specified'}</span>
      </Row>

      <Row className='customRow'>
        <span className='text-dark'>Email:</span>
        <span>{data?.ownerObj?.email || 'Not specified'}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Phone:</span>
        <span>{data?.ownerObj?.phone}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Gender:</span>
        <span>{data?.ownerObj?.gender}</span>
      </Row>
      <Row className='customRow'>
        <span className='text-dark'>Address:</span>
        <span>
          {data?.ownerObj?.addressObj?.street1},{' '}
          {data?.ownerObj?.addressObj?.street2},{' '}
          {data?.ownerObj?.addressObj?.newCity?.city},{' '}
          {data?.ownerObj?.addressObj?.newState?.state},{' '}
          {data?.ownerObj?.addressObj?.newCountry?.country}
        </span>
      </Row>
    </Card>
  );
}

export default OwnerInfo;

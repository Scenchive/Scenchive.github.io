import React, { useEffect, useRef, useState } from 'react';
import {
  ShoppingInformationTabArea,
  ShoppingTabTitle,
  WarningBox,
  WarningTitle,
  WarningContent,
  ShoppingInformationRow,
  PerfumeImage,
  ShoppingInformationArea,
  ProductName,
  ShoppingMallName,
  Price,
} from './styles';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../../../api';
import ShoppingSlider from '../ShoppingSlider';
import { ShoppingInformation } from '../../../common/types';

const ShoppingInformationTab = React.memo(
  (props: { shoppingList: ShoppingInformation[] | null | undefined }) => {
    return (
      <ShoppingInformationTabArea>
        <ShoppingTabTitle>구매 정보</ShoppingTabTitle>
        <WarningBox>
          <WarningTitle>구매 시 유의사항</WarningTitle>
          <WarningContent>
            센카이브는 고객이 쇼핑몰을 통해 구매한 상품에 대해
            <span style={{ color: '#D67070' }}>
              {' '}
              보증하거나 별도의 책임을 지지 않으며,{' '}
            </span>
            상품의 주문, 결제, 배송, 교환, 환불 등 상품판매와 관련한 일체의
            책임은 해당 쇼핑몰에 있습니다.
          </WarningContent>
        </WarningBox>

        <ShoppingSlider shoppingList={props?.shoppingList} />
      </ShoppingInformationTabArea>
    );
  }
);

export default ShoppingInformationTab;

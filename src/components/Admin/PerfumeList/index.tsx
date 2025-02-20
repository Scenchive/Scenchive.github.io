import React from 'react';
import { PerfumeListArea, PerfumeListRow } from './styles';

interface Brand {
  brandId: number | null;
  brandImage: string;
  brandName: string;
  brandName_kr: string;
  perfumeId: number;
  perfumeName: string;
  perfumeImage: string;
}

interface PerfumeListParams {
  brandListRef: React.RefObject<HTMLDivElement>;
  perfumeSearchResultList: Brand[];
  selectPerfume: (el: Brand) => void;
}

const PerfumeList = (props: PerfumeListParams) => {
  return (
    <PerfumeListArea ref={props?.brandListRef}>
      {props?.perfumeSearchResultList.map((el, index) => {
        return (
          <PerfumeListRow
            key={'perfumelist_' + index}
            onClick={() => {
              props?.selectPerfume(el);
            }}
          >
            <div
              style={{
                width: 'inherit',
                color: '#2e2e2e',
                fontSize: '10px',
                fontWeight: '400',
                marginBottom: '4px',
              }}
            >
              {el?.brandName_kr}({el?.brandName})
            </div>
            {el?.perfumeName}
          </PerfumeListRow>
        );
      })}
    </PerfumeListArea>
  );
};

export default PerfumeList;

import React, { useEffect, useRef, useState } from 'react';
import {
  ModalBackgroundArea,
  ModalArea,
  ModalTitle,
  SectionArea,
  KeywordTitle,
  KeywordArea,
  KeywordCell,
  ModifyButton,
  CancelButton,
} from './styles';

interface KeywordType {
  id: number;
  ptag: string;
  ptag_kr: string;
  ptagtype_id: number;
}

const KeywordModal = (props: {
  fragranceWheelKeywords: KeywordType[] | undefined;
  moodKeywords: KeywordType[] | undefined;
  placeKeywords: KeywordType[] | undefined;
  keywordTagsArray: KeywordType[];
  setKeywordTagsArray: React.Dispatch<React.SetStateAction<KeywordType[]>>;
  ModalBackground: React.RefObject<HTMLDivElement>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  myToken: string | null | undefined;
}) => {
  const [newkeywordTagsArray, setNewKeywordTagsArray] = useState<KeywordType[]>(
    []
  );
  let addOrDeleteKeywordArray: {
    id: number;
    ptag: string;
    ptag_kr: string;
    ptagtype_id: number;
  }[] = [];

  const addOrDeleteKeyword = (el: {
    id: number;
    ptag: string;
    ptag_kr: string;
    ptagtype_id: number;
  }) => {
    //이전에 선택한게 있으면
    if (newkeywordTagsArray.length > 0) {
      let exists = false;
      newkeywordTagsArray.map((item) => {
        if (item.id === el.id) {
          exists = true;
        }
      });
      if (exists) {
        addOrDeleteKeywordArray = newkeywordTagsArray.filter(
          (keyword) => keyword.id !== el.id
        );
        setNewKeywordTagsArray(addOrDeleteKeywordArray);
      } else if (!exists) {
        setNewKeywordTagsArray((prevState) => [...prevState, el]);
      }
    }
    // 이전에 선택한게 없으면
    else {
      setNewKeywordTagsArray((prevState) => [...prevState, el]);
    }
  };

  const changeKeyword = (el: KeywordType[]) => {
    props?.setKeywordTagsArray(el);
    props?.setIsModalOpen(false);
  };

  const cancelKeyword = () => {
    setNewKeywordTagsArray([]);
    props?.setIsModalOpen(false);
  };

  useEffect(() => {
    setNewKeywordTagsArray(props?.keywordTagsArray);
  }, [props?.keywordTagsArray]);

  return (
    <div style={{ width: '100%', display: 'contents', paddingTop: '100px' }}>
      <ModalBackgroundArea
        isModalOpen={props.isModalOpen}
        ref={props.ModalBackground}
      ></ModalBackgroundArea>
      <ModalArea isModalOpen={props.isModalOpen} ref={props.ModalBackground}>
        <ModalTitle>향수 키워드 추가</ModalTitle>
        <CancelButton
          onClick={() => cancelKeyword()}
          src={'/assets/icon/icon_modal_x.svg'}
        />

        <SectionArea>
          <KeywordTitle>계열</KeywordTitle>
          <KeywordArea>
            {props.fragranceWheelKeywords?.map((el) => (
              <KeywordCell
                key={el.id}
                style={{
                  backgroundColor: newkeywordTagsArray.filter(
                    (item) => item.id === el.id
                  )?.length
                    ? '#D67070'
                    : '#F5D0CD',
                  color: newkeywordTagsArray.filter((item) => item.id === el.id)
                    ?.length
                    ? '#FFFFFF'
                    : '#616161',
                }}
                onClick={() => addOrDeleteKeyword(el)}
              >
                {el.ptag_kr}
              </KeywordCell>
            ))}
          </KeywordArea>
        </SectionArea>

        <SectionArea style={{ marginTop: '30px' }}>
          <KeywordTitle>분위기</KeywordTitle>
          <KeywordArea>
            {props.moodKeywords?.map((el) => (
              <KeywordCell
                key={el.id}
                style={{
                  backgroundColor: newkeywordTagsArray.filter(
                    (item) => item.id === el.id
                  )?.length
                    ? '#D67070'
                    : '#F5D0CD',
                  color: newkeywordTagsArray.filter((item) => item.id === el.id)
                    ?.length
                    ? '#FFFFFF'
                    : '#616161',
                }}
                onClick={() => addOrDeleteKeyword(el)}
              >
                {el.ptag_kr}
              </KeywordCell>
            ))}
          </KeywordArea>
        </SectionArea>

        <SectionArea style={{ marginTop: '30px' }}>
          <KeywordTitle>장소</KeywordTitle>
          <KeywordArea>
            {props.placeKeywords?.map((el) => (
              <KeywordCell
                key={el.id}
                style={{
                  backgroundColor: newkeywordTagsArray.filter(
                    (item) => item.id === el.id
                  )?.length
                    ? '#D67070'
                    : '#F5D0CD',
                  color: newkeywordTagsArray.filter((item) => item.id === el.id)
                    ?.length
                    ? '#FFFFFF'
                    : '#616161',
                }}
                onClick={() => addOrDeleteKeyword(el)}
              >
                {el.ptag_kr}
              </KeywordCell>
            ))}
          </KeywordArea>
        </SectionArea>

        <ModifyButton onClick={() => changeKeyword(newkeywordTagsArray)}>
          추가하기
        </ModifyButton>
      </ModalArea>
    </div>
  );
};

export default KeywordModal;

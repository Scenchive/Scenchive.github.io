import styled from '@emotion/styled';
const breakpoint = '565px';
const mediaQuery = () => `@media(max-width:${breakpoint})`;

export const ModalBackgroundArea = styled.div<{
  isModalOpen: boolean | undefined;
}>`
  label: modal-background-area;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) =>
    props.isModalOpen === true ? '#000000' : null};
  opacity: ${(props) => (props.isModalOpen === true ? '0.79' : null)};
  z-index: ${(props) => (props.isModalOpen === true ? '1000' : null)};
`;

export const ModalArea = styled.div<{ isModalOpen: boolean | undefined }>`
  label: modal-area;
  width: 400px;
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, 0);
  background-color: #ffffff;
  margin: 100px auto 200px auto;
  padding: 50px;
  flex-flow: wrap;
  z-index: ${(props) => (props.isModalOpen === true ? '1000' : null)};

  ${mediaQuery} {
    width: calc(100% - 80px);
    padding: 20px;
  }
`;

export const ModalTitle = styled.div`
  label: modal-title;
  color: #242424;
  font-size: 2.5rem;
  font-family: Noto Sans KR;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 33px;

  ${mediaQuery} {
    font-size: 2rem;
  }
`;

export const SectionArea = styled.div`
  label: section-area;
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const KeywordTitle = styled.div`
  label: keyword-title;
  font-size: 1.8rem;
  font-family: Noto Sans KR;
  color: #616161;
  margin-right: auto;
  margin-bottom: 15px;
`;

export const KeywordArea = styled.div`
  label: keyword-area;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

export const KeywordCell = styled.div`
  label: keyword-cell;
  width: fit-content;
  padding: 7px 16px;
  color: #616161;
  font-size: 1.6rem;
  font-family: Noto Sans KR;
  border: 2px solid #e3a6a1;
  border-radius: 30px;
  background-color: #f5d0cd;
  box-shadow: 2px 3px 2.5px #d9d9d9;
  margin-bottom: 5px;
  margin-right: 4px;
  cursor: pointer;

  ${mediaQuery} {
    font-size: 1.4rem;
    padding: 7px 10px;
  }
`;

export const ModifyButton = styled.div`
  label: modify-button;
  width: fit-content;
  color: #ffffff;
  font-size: 2rem;
  line-height: 2rem;
  font-family: Noto Sans KR;
  background-color: #d67070;
  border-radius: 2px;
  padding: 10px 38px;
  margin: 75px auto 0px auto;
  cursor: pointer;
`;

export const CancelButton = styled.img`
  label: cancel-button;
  position: absolute;
  right: 50px;
  cursor: pointer;

  ${mediaQuery} {
    top: 20px;
    right: 20px;
  }
`;

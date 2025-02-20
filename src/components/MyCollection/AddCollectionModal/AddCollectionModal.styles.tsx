import styled from '@emotion/styled';

const breakpoint = '768px';
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
  width: 60%;
  position: absolute;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, 0);
  background-color: #ffffff;
  margin: 100px auto 200px auto;
  padding: 50px;
  z-index: ${(props) => (props.isModalOpen === true ? '1000' : null)};
`;

export const ModalTitle = styled.div`
  label: modal-title;
  color: #242424;
  font-size: 2rem;
  font-family: Noto Sans KR;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const AddArea = styled.div`
  label: add-area;
  min-height: 150px;
`;

export const NameArea = styled.div`
  label: name-area;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${mediaQuery} {
    margin-top: 15px;
    flex-direction: column;
  }
`;

export const NameTitle = styled.div`
  label: name-title;
  height: 32px;
  align-self: center;
  width: fit-content;
  color: #616161;
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  font-weight: 500;
  margin-right: 10px;
  text-align: center;
  white-space: nowrap;

  ${mediaQuery} {
    margin-right: auto;
  }
`;

export const NameInput = styled.input`
  label: name-input;
  width: 100%;
  height: 20px;
  color: #b2b2b2;
  font-size: 1.1rem;
  font-family: Noto Sans KR;
  border-bottom: 1.5px solid #dfdfdf;
  border-top: none;
  border-left: none;
  border-right: none;

  :focus {
    outline: none;
  }
`;

export const AlertMessage = styled.div`
  label: alert-message;
  color: red;
  font-size: 10px;
  text-align: left;
  width: inherit;
`;

export const ModifyButton = styled.div`
  label: modify-button;
  width: fit-content;
  color: #ffffff;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  background-color: #d67070;
  padding: 5px 38px 6px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  cursor: pointer;
`;

export const CancelButton = styled.img`
  label: cancel-button;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 50px;
  cursor: pointer;
`;

export const SelectedPerfumeArea = styled.div`
  label: selected-perfume-area;
  font-size: 1.4rem;
  font-family: Noto Sans Kr;
  font-weight: 500;
  color: #d67070;
`;

export const BrandNameArea = styled.div`
  label: brand-name-area;
  width: inherit;
  color: #2e2e2e;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: Noto Sans Kr;
  margin-bottom: 4px;
`;

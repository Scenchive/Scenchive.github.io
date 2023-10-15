import styled from "@emotion/styled"

export const Header = styled.div`
    label:header;
    color:#616161;
    font-size:18px;
    margin-top:40px;
`
export const Content=styled.div`
    label:content;
    display:flex;
    flex-direction:column;
    jusify-content:center;
    margin-top:50px;
    padding-left:20px;
    padding-right:20px;
    align-items:center;
`

export const LoginArea=styled.div`
    label:info-area;
    align-items:start;
    margin-top:64px;
    display:flex;
    flex-direction:column;

`

export const RowArea=styled.div`
    max-width:90%;
    min-width:250px;
`

export const QuestionRow=styled.div`
    label:question-row;
    width:fit-content;
    color:#616161;
    margin-right:auto;
    margin-bottom:2px;
`

export const AnswerRow=styled.input`
    label:answer-row;
    height:25px;
    width:-webkit-fill-available;
    margin-bottom:25px;
    border:none;
    border-bottom:1px solid #DFDFDF;
    background-color:transparent;
    outline:none;
    -webkit-box-shadow: 0 0 0 1000px white inset;
`
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 100px;
  padding: 60px 102px 100px;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
`;

export const InputWrapper = styled.div`
  padding-bottom: 40px;
`;

export const Label = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 0 14px;
  font-size: 16px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 0 14px;
  font-size: 16px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding: 0 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
`;

export const SearchBtn = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: #fff;
  margin-left: 16px;
  cursor: pointer;
  font-size: 16px;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
  padding: 0 16px;
  font-size: 16px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 0 16px;
  font-size: 16px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-bottom: 40px;
`;

export const UploadBtn = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  text-align: center;
  outline: none;
  line-height: 78px;
  border: none;
  cursor: pointer;
  margin-right: 24px;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-bottom: 80px;
`;

export const RadioBtn = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SubmitBtn = styled.div`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
`;

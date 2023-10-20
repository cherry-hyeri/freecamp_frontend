import { useState } from "react";
import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchBtn,
  Address,
  Youtube,
  ImageWrapper,
  UploadBtn,
  OptionWrapper,
  RadioBtn,
  RadioLabel,
  ButtonWrapper,
  SubmitBtn,
  Error,
} from "../../../styles/emotion2";

export default function BoardWritePage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickSubmit = () => {
    if (!writer) {
      setWriterError("작성자를 입력하세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력하세요.");
    }
    if (!title) {
      setTitleError("제목을 입력하세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력하세요");
    }
    if (writer && password && title && contents) {
      alert("게시글이 등록되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Writer
            type="text"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContents}
        />
        <Error>{contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode type="number" />
          <SearchBtn>우편번호 검색</SearchBtn>
        </ZipcodeWrapper>
        <Address type="text" />
        <Address type="text" />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube type="text" placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        <UploadBtn>+</UploadBtn>
        <UploadBtn>+</UploadBtn>
        <UploadBtn>+</UploadBtn>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인 설정</Label>
        <RadioBtn type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioBtn type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
      </ButtonWrapper>
    </Wrapper>
  );
}

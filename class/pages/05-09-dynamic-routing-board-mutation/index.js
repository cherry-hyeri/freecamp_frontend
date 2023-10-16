import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
const CREATE_BOARD = gql`
  ##변수의 타입 적는 곳
  mutation createBoard($writer: String, $title: String, $contents: String) {
    ##실제 우리가 전달할 변수 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationInputPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      // const writer = "qqq" 이 함수에 있으면 현재 스코프
      const result = await createBoard({
        variables: {
          //variables가 $ 역할
          writer: writer, //이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
          title: title,
          contents: contents,
        },
      });
      console.log(result);
      alert(result.data.createBoard.message);
      console.log(result.data.createBoard.number);
      // router.push("/05-10-dynamic-routed-board-mutation" + result.data.createBoard.number);
      router.push(
        `/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`
      ); //템플릿 리터럴 //위에 더하기를 생략한 것과 같음
    } catch (error) {
      // try 내용 시도하다 실패하면 아랫줄 모두 무시하고 catch 실행
      alert(error.message);
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자:
      <input type="text" onChange={onChangeWriter} />
      <br />
      제목:
      <input type="text" onChange={onChangeTitle} />
      <br />
      내용:
      <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}

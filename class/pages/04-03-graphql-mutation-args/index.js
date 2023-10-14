import { useMutation, gql } from "@apollo/client";
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

export default function GraphqlMutationArgsPage() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        //variables가 $ 역할
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다.",
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}

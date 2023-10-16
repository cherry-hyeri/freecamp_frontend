import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-08-dynamic-routed-board-query/18584");
  };

  const onClickMove2 = () => {
    router.push("/05-08-dynamic-routed-board-query/18582");
  };

  const onClickMove3 = () => {
    router.push("/05-08-dynamic-routed-board-query/18583");
  };

  const onClickMove100 = () => {
    router.push("/05-08-dynamic-routed-board-query/18581");
  };

  return (
    <>
      <button onClick={onClickMove1}>1번 게시글 이동하기</button>
      <br />
      <button onClick={onClickMove2}>2번 게시글 이동하기</button>
      <br />
      <button onClick={onClickMove3}>3번 게시글 이동하기</button>
      <br />
      <button onClick={onClickMove100}>100번 게시글 이동하기</button>
      <br />
    </>
  );
}

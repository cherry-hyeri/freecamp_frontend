import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
const CREATE_PRODUCT = gql`
  mutation createProduct(
    ##변수의 타입 적는 곳
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    ##실제 우리가 전달할 변수 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProductPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    // const writer = "qqq" 이 함수에 있으면 현재 스코프
    const result = await createProduct({
      variables: {
        //variables가 $ 역할
        seller: "hhh", //이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
        createProductInput: {
          name: "mouse",
          detail: "wow",
          price: 4000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}

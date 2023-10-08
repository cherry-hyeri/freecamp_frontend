import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  const [emailError, setEmailError] = useState();

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePwd(event) {
    setPwd(event.target.value);
  }

  function onClickSignup() {
    console.log(email);
    console.log(pwd);

    //검증하기
    if (email.includes("@") === false) {
      //   alert("이메일이 올바르지 않습니다.");
      // document.getElementById("error").innerText = "이메일이 올바르지 않습니다."
      setEmailError("이메일이 올바르지 않습니다.");
    } else {
      // 메세지 알림 이전 Backend api 요청하기
      alert("회원가입을 축하합니다.");
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePwd} />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}

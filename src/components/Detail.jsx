import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const {
    state: { id, title, content },
  } = useLocation();
  return (
    <Conatiner>
      <div>
        <Header>
          <div>ID : {id}</div>
          <Link to="/">
            <Btn>이전으로</Btn>
          </Link>
        </Header>
        <H1>{title}</H1>
        <Main>{content}</Main>
      </div>
    </Conatiner>
  );
};

export default Detail;
const Conatiner = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const Header = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;
const Btn = styled.button`
  order: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const Main = styled.main`
  padding: 0px 24px;
`;

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import BirthDropDown from "../components/BirthDropDown";
import { nasaAction } from "../redux/actions/nasaAction";
import BirthMedia from "../components/BirthMedia";

const Apod = () => {
  const { date, birthImg, loading } = useSelector((state) => state.nas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nasaAction.getBirth(date));
  }, [date]);

  return (
    <div className="for-back">
      <div className="contents-back">
        <Container>
          <Row>
            <div className="for-notice">
              <h4>1995년 6월 20일 이후부터 선택 가능</h4>
            </div>

            <BirthDropDown />

            <BirthMedia item={birthImg} loading={loading} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Apod;

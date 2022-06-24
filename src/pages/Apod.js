import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import BirthDropDown from "../components/BirthDropDown";
import { nasaAction } from "../redux/actions/nasaAction";
import BirthMedia from "../components/BirthMedia";
import Share from "../components/Share";
import { useNavigate } from "react-router-dom";

//APOD페이지

const Apod = () => {
  const { date, birthImg, loading } = useSelector((state) => state.nas);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nasaAction.getBirth(date));
    navigate(`/apod/?q=${date}`);
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

            {birthImg.media_type == "video" ? null : <Share item={birthImg} />}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Apod;

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nasaAction } from "../redux/actions/nasaAction";
import BirthMedia from "../components/BirthMedia";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

const Sharing = () => {
  const { birthImg } = useSelector((state) => state.nas);

  const [query, setQuery] = useSearchParams();
  let dateQuery = query.get("q");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nasaAction.getBirth(dateQuery));
  }, [query]);

  return (
    <div className="for-back">
      <div className="contents-back">
        <Container>
          <Row>
            <div className="selected-date">
              <h2>{moment(dateQuery).format("LL")}</h2>
              <h6>이 날의 천문학 사진</h6>
            </div>
            <BirthMedia item={birthImg} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Sharing;

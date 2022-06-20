import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PhotoCard from "../components/PhotoCard";
import { nasaAction } from "../redux/actions/nasaAction";
import ClipLoader from "react-spinners/ClipLoader";

const Gallery = () => {
  const { apodImg, loading } = useSelector((state) => state.nas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nasaAction.getImg());
  }, []);

  //이미지만 받아오기
  let newApodImg = Array.from(apodImg).slice().filter((it)=>it.media_type == "image");



  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="blue" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="gal-back">
      <Container>
        <Row>
          {newApodImg?.map((item) => (
            <Col lg={3} md={4} sm={6}>
              <PhotoCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;

import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sharing = () => {
  const { date, birthImg, loading } = useSelector((state) => state.nas);

  const [query, setQuery] = useSearchParams();
  let dateQuery = query.get("q");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nasaAction.getBirth(dateQuery));
  }, [query]);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="blue" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="for-back">
      <div className="contents-back">
        <Container>
          <Row>
            <div className="for-notice">
              <h4>{`${moment(date).format("LL")} 천문학 사진`}</h4>
            </div>

            <BirthMedia item={birthImg} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Sharing;

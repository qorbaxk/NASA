import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { nasaActions } from "../redux/reducers/nasaReducer";
import { useDispatch } from "react-redux";


const BirthDropDown = () => {
  //년 배열
  let yearArr = [];
  for (let i = 1995; i <= 2022; i++) {
    yearArr.push(i);
  }
  //달 배열
  let monthArr = [];
  for (let i = 1; i <= 12; i++) {
    monthArr.push(i);
  }
  //날 배열
  let dayArr = [];
  for (let i = 1; i <= 31; i++) {
    dayArr.push(i);
  }

  const [yearTitle, setYearTitle] = useState("Year");
  const [monthTitle, setMonthTitle] = useState("Month");
  const [dayTitle, setDayTitle] = useState("Day");
  const dispatch = useDispatch();

  let date = `${yearTitle}-${monthTitle}-${dayTitle}`;

  useEffect(() => {
    dispatch(
      nasaActions.getDating({
        date: date,
      })
    );
  }, [date]);

  return (
    <div className="dropdowns">
      <div>
        <DropdownButton
          id="dropdown-item-button"
          title={`${yearTitle} 년`}
          onSelect={(eventKey) => setYearTitle(eventKey)}
        >
          {yearArr.reverse().map((value) => (
            <Dropdown.Item eventKey={value} as="button">
              {value}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div>
        <DropdownButton
          id="dropdown-item-button"
          title={`${monthTitle} 월`}
          onSelect={(eventKey) => setMonthTitle(eventKey)}
        >
          {monthArr.map((value) => (
            <Dropdown.Item eventKey={value} as="button">
              {value}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div>
        <DropdownButton
          id="dropdown-item-button"
          title={`${dayTitle} 일`}
          onSelect={(eventKey) => setDayTitle(eventKey)}
        >
          {dayArr.map((value) => (
            <Dropdown.Item eventKey={value} as="button">
              {value}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default BirthDropDown;

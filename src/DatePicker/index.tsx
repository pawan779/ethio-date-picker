import React from "react";
import _ from "lodash";
import { useState } from "react";
import Picker from "./Picker";
import moment from "moment";

function DatePicker() {
  const [date, setDate] = useState({
    formatted: { am: "", en: "" },
    date: { am: {}, en: {} },
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div>
      <input
        type="text"
        value={
          !_.isEmpty(date?.formatted.am) ? date?.formatted.am : "YYYY-MM-DD"
        }
        onClick={() => setShowDatePicker(!showDatePicker)}
      />
      <input
        type="text"
        value={
          !_.isEmpty(date?.formatted.en) ? date?.formatted.en : "YYYY-MM-DD"
        }
        onClick={() => setShowDatePicker(!showDatePicker)}
      />
      {showDatePicker && (
        <Picker
          onChangeDate={(date: any) => {
            console.log("date", date);
            setDate(date);
          }}
          date={!_.isEmpty(date.formatted.en) ? date.formatted.en : ""}
          isEthiopoianDate={false}
          // maxDate={"2023-10-08"}
          // minDate={moment(Date.now()).format("YYYY-MM-DD")}
          language="am" // language?: "am" | "or"
        />
      )}
    </div>
  );
}

export default DatePicker;

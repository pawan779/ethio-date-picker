import React, {
  CSSProperties,
  StyleHTMLAttributes,
  useEffect,
  useState,
} from "react";

import moment from "moment";
import { toEthiopianDateString, convertToGC } from "gc-to-ethiopian-calendar";
import _ from "lodash";
import { enMonth, years, intitalDay, months, weeks } from "./DateData";

interface PickerProps {
  onChangeDate: (date: any) => void;
  date: string;
  isEthiopoianDate?: boolean;
  containerStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  daysStyle?: CSSProperties;
  maxDate?: string;
  minDate?: string;
  language?: "am" | "or";
}

const Picker: React.FC<PickerProps> = ({
  date = "",
  onChangeDate = () => {},
  isEthiopoianDate = false,
  containerStyle = {},
  headerStyle = {},
  daysStyle = {},
  maxDate = "",
  minDate = "",
  language = "am",
}) => {
  const [days, setDays] = useState(intitalDay);

  const [isChanged, setIsChanged] = React.useState<boolean>(false);
  const [currentYear, setCurrentYear] = React.useState<string>("2014");
  const [currentMonth, setCurrentMonth] = React.useState<string>("1");
  const [isLeapYear, setIsLeapYear] = React.useState<boolean>(false);

  const [maximumDate, setMaximumDate] = React.useState<any>({
    year: 2300,
    month: 13,
    day: 30,
  });
  const [minimumDate, setMinimumDate] = React.useState<any>({
    year: 1900,
    month: 1,
    day: 1,
  });

  const [selectedDate, setSelectedDate] = React.useState<any>({
    am: {},
    en: {},
  });
  const [enYear, setEnYear] = React.useState<string>("2022");
  const [today, setToday] = React.useState<any>({
    day: "",
    week: "",
    month: "",
    year: "",
  });

  const langChecker = (key1: any) => {
    const lang = language;

    try {
      return key1[lang];
    } catch (e) {
      return "";
    }
  };
  const findLeapYear = (year) => {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  };

  const converToGeorgian = (day: any) => {
    if (_.isNumber(day)) {
      const gcDate = convertToGC(
        parseInt(day),
        parseInt(currentMonth),
        parseInt(currentYear)
      );
      const split = gcDate.split(" ");
      return parseFloat(split[1]).toFixed(0);
    } else {
      return "";
    }
  };

  const handleSelectedDay = (day: any) => {
    const gcDate = convertToGC(day, currentMonth, currentYear);
    const split = gcDate.split(" ");

    setSelectedDate({
      am: { day: day, month: currentMonth, year: currentYear },
      en: {
        day: split[1],
        month: moment(split[2], "MMM").format("MM"),
        year: split[3],
      },
    });

    //pass the selected date to the parent component
    onChangeDate({
      formatted: {
        am: currentYear + "-" + currentMonth + "-" + day,
        en:
          split[3] +
          "-" +
          moment(split[2], "MMM").format("MM") +
          "-" +
          split[1],
      },
      date: {
        am: { day: day, month: currentMonth, year: currentYear },
        en: {
          day: split[1],
          month: moment(split[2], "MMM").format("MM"),
          year: split[3],
        },
      },
    });
  };

  const getTodayDate = () => {
    const dateNow = toEthiopianDateString();
    const split = dateNow.split(" ");

    const findMonth = months.find((a) => a.am == split[2]);

    setToday({
      day: split[1],
      week: split[0],
      month: findMonth.value,
      year: split[3],
    });
    _.isEmpty(date) && handleChangeDate(findMonth.value, split[3]);
  };

  const handleChangeDate = (month: string, year: string) => {
    const gcDate = convertToGC(1, parseInt(month), parseInt(year));
    const week = gcDate.split(", ");
    setEnYear(gcDate.split(" ")[3]);

    //to know in which day the month starts
    const getWeek = weeks.find((a) => a.en == week[0]);
    let newDay = [...days];
    for (let index = 1; index < getWeek.value; index++) {
      newDay.unshift({
        am: "",
        en: "",
        value: "",
      });
    }
    setDays(newDay);

    setCurrentMonth(month);
    setCurrentYear(year);

    setIsLeapYear(findLeapYear(parseInt(year) + 1));
  };

  const getEthioDate = (val: any) => {
    const date = toEthiopianDateString(val);
    const split = date.split(" ");
    const findMonth = months.find((a) => a.am == split[2]);
    return { split, findMonth };
  };

  const findEthioDate = (val: any) => {
    const etDate = getEthioDate(val);

    const split1 = val.split("-");

    handleChangeDate(etDate.findMonth.value, etDate.split[3]);
    setSelectedDate({
      am: {
        day: etDate.split[1],
        month: etDate.findMonth.value,
        year: etDate.split[3],
      },
      en: {
        day: split1[2],
        month: split1[1],
        year: split1[0],
      },
    });
  };

  const findGeorgianDate = (val: any) => {
    const split1 = val.split("-");
    const date = convertToGC(
      parseInt(split1[2]),
      parseInt(split1[1]),
      parseInt(split1[0])
    );
    const split = date.split(" ");
    const findMonth = enMonth.find((a) => a.en == split[2]);
    handleChangeDate(split1[1], split1[0]);
    setSelectedDate({
      am: {
        day: split1[2],
        month: split1[1],
        year: split1[0],
      },
      en: {
        day: split[1],
        month: findMonth.value,
        year: split[3],
      },
    });
  };

  //to show the input date
  const handleInputDate = () => {
    let inputDate = moment(date).format("YYYY-MM-DD");
    //check the input date is ethiopian or georgian
    !isEthiopoianDate ? findEthioDate(inputDate) : findGeorgianDate(inputDate);
  };

  //handle the maximum date and minimum date
  const handleMaxMinDate = () => {
    if (!_.isEmpty(maxDate)) {
      const etDate = getEthioDate(maxDate);
      console.log(etDate);
      setMaximumDate({
        year: etDate.split[3],
        month: etDate.findMonth.value,
        day: etDate.split[1],
      });
    }
    if (!_.isEmpty(minDate)) {
      const etDate1 = getEthioDate(minDate);
      setMinimumDate({
        year: etDate1.split[3],
        month: etDate1.findMonth.value,
        day: etDate1.split[1],
      });
    }
  };

  useEffect(() => {
    getTodayDate();
    !_.isEmpty(date) && handleInputDate();
    handleMaxMinDate();
  }, []);

  const handleMaxMinDays = (val: any) => {
    if (
      currentYear == minimumDate.year &&
      currentYear == maximumDate.year &&
      currentMonth == minimumDate.month &&
      currentMonth == maximumDate.month
    ) {
      if (val.value < minimumDate.day || val.value > maximumDate.day) {
        return "";
      } else {
        return val.value;
      }
    } else {
      if (currentYear == minimumDate.year) {
        if (currentMonth == minimumDate.month) {
          if (val.value < minimumDate.day) {
            return "";
          } else {
            return val.value;
          }
        }
      }

      if (currentYear == maximumDate.year) {
        if (currentMonth == maximumDate.month) {
          if (val.value > maximumDate.day) {
            return "";
          } else {
            return val.value;
          }
        }
      }
    }

    return val.value;
  };

  useEffect(() => {
    if (isChanged) {
      if (currentYear == minimumDate.year) {
        if (currentMonth <= minimumDate.month) {
          handleChangeDate(minimumDate.month, currentYear);
        } else {
          handleChangeDate(currentMonth, currentYear);
        }
      } else if (currentYear == maximumDate.year) {
        if (currentMonth >= maximumDate.month) {
          handleChangeDate(maximumDate.month, currentYear);
        } else {
          handleChangeDate(currentMonth, currentYear);
        }
      } else {
        handleChangeDate(currentMonth, currentYear);
      }
    }
    setIsChanged(false);
  }, [isChanged]);

  return (
    <div className="container" style={{ ...containerStyle }}>
      <div className="headerContainer" style={{ ...headerStyle }}>
        <div className="amPicker">
          <select
            name="months"
            id="months"
            value={currentMonth}
            className="dropdown"
            onChange={async (e) => {
              setDays(intitalDay);
              setCurrentMonth(parseInt(e.target.value));
              setIsChanged(true);
            }}
          >
            {months.map((month, index) => {
              if (
                currentYear == minimumDate.year &&
                currentYear == maximumDate.year
              ) {
                if (
                  month.value >= minimumDate.month &&
                  month.value <= maximumDate.month
                ) {
                  return (
                    <option key={index} value={month.value}>
                      {langChecker(month)}
                    </option>
                  );
                }
              } else if (currentYear == minimumDate.year) {
                if (month.value >= minimumDate.month) {
                  return (
                    <option
                      value={month.value}
                      key={index.toString()}
                      selected={month.value == currentMonth}
                    >
                      {langChecker(month)}
                    </option>
                  );
                }
              } else if (currentYear == maximumDate.year) {
                if (month.value <= maximumDate.month) {
                  return (
                    <option
                      value={month.value}
                      key={index.toString()}
                      selected={month.value == currentMonth}
                    >
                      {langChecker(month)}
                    </option>
                  );
                }
              } else {
                return (
                  <option
                    value={month.value}
                    key={index.toString()}
                    selected={month.value == currentMonth}
                  >
                    {langChecker(month)}
                  </option>
                );
              }
            })}
          </select>

          <select
            name="years"
            id="years"
            className="dropdown"
            onChange={async (e) => {
              setDays(intitalDay);
              setCurrentYear(e.target.value);
              setIsChanged(true);
            }}
          >
            {years.map(
              (year, index) =>
                year >= minimumDate.year &&
                year <= maximumDate.year && (
                  <option
                    value={year}
                    key={index.toString()}
                    selected={year == currentYear}
                  >
                    {year}
                  </option>
                )
            )}
          </select>
        </div>
        <div className="enPicker">
          <span className="enDate">{months[currentMonth - 1].en}</span>
          <span className="enDate">
            {months[currentMonth - 1].en == "Dec/Jan"
              ? `${enYear}/${parseInt(enYear) + 1}`
              : enYear}
          </span>
        </div>
      </div>
      <div className="bodyContainer">
        {weeks.map((week, index) => (
          <div
            style={{
              width: "14.28%",
              textAlign: "center",
            }}
            key={index.toString()}
            className="weekSty"
          >
            <h5>{langChecker(week)}</h5>
            <h5 style={{ marginTop: "-10px", marginBottom: "20px" }}>
              {week.en}
            </h5>
          </div>
        ))}
        {days.map((day, index) =>
          currentMonth == 13 && day.value > `${isLeapYear ? 6 : 5}` ? (
            <div className="daySty">
              <div className="multiDate1">
                <span className="amDay"></span>
                <span className="enDay"></span>
              </div>
            </div>
          ) : (
            <>
              {_.isNumber(day.value) ? (
                <>
                  {_.isNumber(handleMaxMinDays(day)) ? (
                    <div
                      onClick={() =>
                        day.value == ""
                          ? console.log("empty")
                          : handleSelectedDay(day.value)
                      }
                      className="daySty"
                      key={index.toString()}
                    >
                      <div
                        className="multiDate"
                        style={{
                          color:
                            day.value == selectedDate.am.day &&
                            currentMonth == selectedDate.am.month &&
                            currentYear == selectedDate.am.year
                              ? "#fff"
                              : currentMonth == today.month &&
                                today.day == day.value &&
                                currentYear == today.year
                              ? "#f49119"
                              : "#000",

                          backgroundColor:
                            day.value == selectedDate.am.day &&
                            currentMonth == selectedDate.am.month &&
                            currentYear == selectedDate.am.year
                              ? "#063b71"
                              : "whitesmoke",
                          ...daysStyle,
                        }}
                      >
                        <span className="amDay">{langChecker(day)}</span>
                        <span className="enDay">
                          {converToGeorgian(day.value)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="daySty">
                      <div
                        className="multiDate"
                        style={{ backgroundColor: "#fff", color: "#d3d3d3" }}
                      >
                        <span className="amDay">{langChecker(day)}</span>
                        <span className="enDay">
                          {converToGeorgian(day.value)}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="daySty">
                  <div className="multiDate1">
                    <span className="amDay"></span>
                    <span className="enDay"></span>
                  </div>
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Picker;

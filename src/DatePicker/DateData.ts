export const intitalDay = [
  { am: "፩", en: 1, or: 1, value: 1 },
  { am: "፪", en: 2, or: 2, value: 2 },
  { am: "፫", en: 3, or: 3, value: 3 },
  { am: "፬", en: 4, or: 4, value: 4 },
  { am: "፭", en: 5, or: 5, value: 5 },
  { am: "፮", en: 6, or: 6, value: 6 },
  { am: "፯", en: 7, or: 7, value: 7 },
  { am: "፰", en: 8, or: 8, value: 8 },
  { am: "፱", en: 9, or: 9, value: 9 },
  { am: "፲", en: 10, or: 10, value: 10 },
  { am: "፲፩", en: 11, or: 11, value: 11 },
  { am: "፲፪", en: 12, or: 12, value: 12 },
  { am: "፲፫", en: 13, or: 13, value: 13 },
  { am: "፲፬", en: 14, or: 14, value: 14 },
  { am: "፲፭", en: 15, or: 15, value: 15 },
  { am: "፲፮", en: 16, or: 16, value: 16 },
  { am: "፲፯", en: 17, or: 17, value: 17 },
  { am: "፲፰", en: 18, or: 18, value: 18 },
  { am: "፲፱", en: 19, or: 19, value: 19 },
  { am: "፳", en: 20, or: 20, value: 20 },
  { am: "፳፩", en: 21, or: 21, value: 21 },
  { am: "፳፪", en: 22, or: 22, value: 22 },
  { am: "፳፫", en: 23, or: 23, value: 23 },
  { am: "፳፬", en: 24, or: 24, value: 24 },
  { am: "፳፭", en: 25, or: 25, value: 25 },
  { am: "፳፮", en: 26, or: 26, value: 26 },
  { am: "፳፯", en: 27, or: 27, value: 27 },
  { am: "፳፰", en: 28, or: 28, value: 28 },
  { am: "፳፱", en: 29, or: 29, value: 29 },
  { am: "፴", en: 30, or: 30, value: 30 },
];

export const weeks = [
  { am: "ሰ", en: "Mon", or: "Wiix", value: 1 },
  { am: "ማ", en: "Tue", or: "Kib", value: 2 },
  { am: "ረ", en: "Wed", or: "Roob", value: 3 },
  { am: "ሐ", en: "Thu", or: "Kam", value: 4 },
  { am: "አ", en: "Fri", or: "Jim", value: 5 },
  { am: "ቅ", en: "Sat", or: "Sdur", value: 6 },
  { am: "እ", en: "Sun", or: "Sgud", value: 7 },
];

// መሰከረም	ጥቅምት	ህዳር	ታህሳስ	ጥር	የካቲት	መጋቢት	ሚያዚያ	ግንቦት	ሰኔ	ሀምሌ	ነሐሴ	ጳጉሜ
export const months = [
  { am: "መስከረም", en: "Sept/Oct", or: "Ammajjii", value: 1 },
  { am: "ጥቅምት", en: "Oct/Nov", or: "Guraandhala", value: 2 },
  { am: "ህዳር", en: "Nov/Dec", or: "Bitootessa", value: 3 },
  { am: "ታህሳስ", en: "Dec/Jan", or: "Ebla", value: 4 },
  { am: "ጥር", en: "Jan/Feb", or: "Caamsaa", value: 5 },
  { am: "የካቲት", en: "Feb/Mar", or: "Waxabajji", value: 6 },
  { am: "መጋቢት", en: "Mar/Apr", or: "Adoolessa", value: 7 },
  { am: "ሚያዝያ", en: "Apr/May", or: "Hagayya", value: 8 },
  { am: "ግንቦት", en: "May/Jun", or: "Fulbaana", value: 9 },
  { am: "ሰኔ", en: "Jun/Jul", or: "Onkololeessa", value: 10 },
  { am: "ሐምሌ", en: "Jul/Aug", or: "Sadaasa", value: 11 },
  { am: "ነሐሴ", en: "Aug/Sept", or: "Muddee", value: 12 },
  {
    am: "ጳጉሜ",
    en: "Sept",
    or: "Qaaqumee",
    value: 13,
  },
];

export const enMonth = [
  {
    en: "Jan",
    value: 1,
  },
  {
    en: "Feb",
    value: 2,
  },
  {
    en: "Mar",
    value: 3,
  },
  {
    en: "Apr",
    value: 4,
  },
  {
    en: "May",
    value: 5,
  },
  {
    en: "Jun",
    value: 6,
  },
  {
    en: "Jul",
    value: 7,
  },
  {
    en: "Aug",
    value: 8,
  },
  {
    en: "Sept",
    value: 9,
  },
  {
    en: "Oct",
    value: 10,
  },
  {
    en: "Nov",
    value: 11,
  },
  {
    en: "Dec",
    value: 12,
  },
];

// export const year = [
//   2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
//   2027, 2028, 2029, 2030,
// ];

//generate array of years from 1900 to 2100
export const years = Array.from({ length: 201 }, (v, k) => k + 1900);

export const intitalDay = [
  { am: "፩", en: 1, value: 1 },
  { am: "፪", en: 2, value: 2 },
  { am: "፫", en: 3, value: 3 },
  { am: "፬", en: 4, value: 4 },
  { am: "፭", en: 5, value: 5 },
  { am: "፮", en: 6, value: 6 },
  { am: "፯", en: 7, value: 7 },
  { am: "፰", en: 8, value: 8 },
  { am: "፱", en: 9, value: 9 },
  { am: "፲", en: 10, value: 10 },
  { am: "፲፩", en: 11, value: 11 },
  { am: "፲፪", en: 12, value: 12 },
  { am: "፲፫", en: 13, value: 13 },
  { am: "፲፬", en: 14, value: 14 },
  { am: "፲፭", en: 15, value: 15 },
  { am: "፲፮", en: 16, value: 16 },
  { am: "፲፯", en: 17, value: 17 },
  { am: "፲፰", en: 18, value: 18 },
  { am: "፲፱", en: 19, value: 19 },
  { am: "፳", en: 20, value: 20 },
  { am: "፳፩", en: 21, value: 21 },
  { am: "፳፪", en: 22, value: 22 },
  { am: "፳፫", en: 23, value: 23 },
  { am: "፳፬", en: 24, value: 24 },
  { am: "፳፭", en: 25, value: 25 },
  { am: "፳፮", en: 26, value: 26 },
  { am: "፳፯", en: 27, value: 27 },
  { am: "፳፰", en: 28, value: 28 },
  { am: "፳፱", en: 29, value: 29 },
  { am: "፴", en: 30, value: 30 },
];

export const weeks = [
  { am: "እሁድ", en: "Sun", or: "Sanbata gudda", value: 1 },
  { am: "ሰኞ", en: "Mon", or: "Wiixata", value: 2 },
  { am: "ማክሰኞ", en: "Tue", or: "Kibxata", value: 3 },
  { am: "ረቡዕ", en: "Wed", or: "Roobii", value: 4 },
  { am: "ሐሙስ", en: "Thu", or: "Kamisa", value: 5 },
  { am: "ዓርብ", en: "Fri", or: "Jimaata", value: 6 },
  { am: "ቅዳሜ", en: "Sat", or: "Sanbata xiqqaa", value: 7 },
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

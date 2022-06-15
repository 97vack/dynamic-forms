import { DataType } from 'types/verification';
// ele ref
export const DATA_REF = 'data-ref';
// ele type
export const DATA_TYPE = 'data-type';

// formItem errMsg
export const VER_ERR_MSG = {
  requireEN: 'is Required',
};

// data-type
export const DATA_TYPES: DataType[] = [
  // isNumber
  'number',
  // isEmail
  'email',
  // China mobile number (rigorous), according to the mobile number segment newly released by the Ministry of industry and information technology in 2019
  'chTelStrict',
  //Chinese mobile number (loose), as long as it starts with 13,14,15,16,17,18,19
  'chTelEasy',
  //Chinese mobile number (the most relaxed), as long as it starts with 1. If your mobile number is used to receive SMS, it is preferred to choose this one
  'chTel',
  // landline
  'landline',
  // 'url
  'url',
  // base64
  'base64',
  // chineseName
  'chineseName',
  // engName
  'engName',
  // card,
  'card',
  // Whether the account number is legal (start with a letter, allow 5-16 bytes, allow alphanumeric underscore combination
  'accountNumber',
  // Pure Chinese / Chinese characters,
  'allChinese',
  // isHtml
  'isHtml',
  // Whether it consists of numbers and letters
  'numbersOrLetters',
  // pure English,
  'pureEnglish',
  // Composed of pure lowercase English letters
  'pureLowercaseEnglish',
  // Composed of pure capital English letters
  'pureCapitalizedEnglish',
  // The password strength is regular, with at least 6 digits, including at least 1 upper case letter, 1 lower case letter, 1 number and 1 special character
  'pass',
  // money,
  'money',
  // License plate number (new energy + non new energy)
  'plateNumber',
];

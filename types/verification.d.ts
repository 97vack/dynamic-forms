
export interface VerResult { isCheck: boolean; msg?: string }

export type VerT<T> = { ( val: string | number, options?: T ): VerResult; }

export type ItemOptions = { msg?: string; value?: boolean | string | number } | boolean;

export type VerOptions = { required?: ItemOptions; }


export type NumOptions = VerOptions & {
  allowZero?: ItemOptions;
  min?: ItemOptions;
  max?: ItemOptions;
  regs?: {
    value: RegExp | string;
    msg?: string;
  }
  basicMsg?: string;
}
export type NumFn = VerT<NumOptions>


export type MaxOptions = { max: number, msg?: string; }
export type MaxFn = VerT<MaxOptions>

export type MinOptions = { min: number, msg?: string;  }
export type MinFn = VerT<MinOptions>

export type DataType = 
'number' | 
'email' | 
'chTelStrict' | 
'chTelEasy' | 
'chTel' | 
'landline' | 
'url' | 
'base64' | 
'chineseName' | 
'engName' | 
'card' | 
'accountNumber' | 
'allChinese' | 
'isHtml' | 
'numbersOrLetters' | 
'pureEnglish' | 
'pureLowercaseEnglish' | 
'pureCapitalizedEnglish' | 
'pass' | 
'money' | 
'plateNumber' |
 '' | undefined | null
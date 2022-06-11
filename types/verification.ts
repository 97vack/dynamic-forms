export type ItemOptions = { msg?: string; value?: boolean | string | number } | boolean;

export type VerOptions = { required?: ItemOptions; }

export type NumOptions = VerOptions & {
  allowZero?: ItemOptions;
  min?: ItemOptions;
  max?: ItemOptions;
  regs?: {
    value: RegExp | string;
    msg: string;
  }
  basicMsg?: string;
}
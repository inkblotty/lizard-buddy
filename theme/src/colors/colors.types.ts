interface ColorObj {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string | undefined;
}
export interface Colors {
  primary: ColorObj;
  secondary: ColorObj;
  success: ColorObj;
  error: ColorObj;
  warning: ColorObj;
  information: ColorObj;
  neutral: ColorObj;
  reward?: ColorObj;
}

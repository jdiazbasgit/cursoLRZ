import { ValidationRule } from "react-hook-form";

export const patternURL = new RegExp('^((https?:\/\/)|(www\.)){1}' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'gi');

export const regExpUrl: ValidationRule<RegExp> | undefined = {
  value: patternURL,
  message: "URL inválida",
}

// Valida URLs con "https://"
export const patternURLWithProtocol = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/\S*)?$/

// Valida URLs sin "https://"
export const patternURLWithoutProtocol = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/\S*)?$/

// export const patternURLWithProtocol = new RegExp('^((https?:\/\/)(www\.)){1}' + // protocol
//   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//   '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//   '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//   '(\\#[-a-z\\d_]*)?$', 'gi');

export const regExpUrlWithProtocol: ValidationRule<RegExp> | undefined = {
  value: patternURLWithProtocol,
  message: "URL inválida, el enlace debe ser de la forma https://www.ejemplo.com",
}

export const regExpSymbol: ValidationRule<RegExp> | undefined = {
  value: /^[\x00-\x7FÀ-ÿ\u00f1\u00d1\’]*$/gi,
  message: "No puede contener simbología"
}

export const regExpText: ValidationRule<RegExp> | undefined = {
  value: /^[a-zÀ-ÿ\s,.]*$/gi,
  message: "No puede contener caracteres especiales ni números"
}
export const regExpPassword: ValidationRule<RegExp> | undefined = {
  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&._-])([A-Za-z\d$@$!%*?&._-]|[^ ]){8,16}$/,
  message: "Debe contener entre 8 a 16 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
}

export const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_TOKEN_KEY ?? "secret"

   
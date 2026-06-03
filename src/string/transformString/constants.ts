import recaseCamel from '../recaseCamel';
import recaseKebab from '../recaseKebab';
import recaseLower from '../recaseLower';
import recasePascal from '../recasePascal';
import recaseScreamingSnake from '../recaseScreamingSnake';
import recaseSnake from '../recaseSnake';
import recaseTitle from '../recaseTitle';
import recaseUpper from '../recaseUpper';
import retypeToNfc from '../retypeToNfc';
import retypeToNfd from '../retypeToNfd';
import retypeToNfkc from '../retypeToNfkc';
import retypeToNfkd from '../retypeToNfkd';

import {
  toFullWidth,
  toFullWidthAlphabet,
  toFullWidthKana,
  toFullWidthNumber,
  toFullWidthSign,
  toFullWidthSpace,
} from '../retypeToFullWidth/constants';
import {
  toHalfWidtn,
  toHalfWidtnAlphabet,
  toHalfWidtnKana,
  toHalfWidtnNumber,
  toHalfWidtnSign,
  toHalfWidtnSpace,
} from '../retypeToHalfWidth/constants';
import { toHiragana } from '../retypeToHiragana/constants';
import {
  toHiraganaSeion,
  toHiraganaSeionFromDakuon,
  toHiraganaSeionFromSokuon,
  toHiraganaSeionFromYouon,
} from '../retypeToHiraganaSeion/constants';
import { toKatakana } from '../retypeToKatakana/constants';
import {
  toKatakanaSeion,
  toKatakanaSeionFromDakuon,
  toKatakanaSeionFromSokuon,
  toKatakanaSeionFromYouon,
} from '../retypeToKatakanaSeion/constants';
import { toNoChouon } from '../retypeToNoChouon/constants';
import { toNoLineFeed } from '../retypeToNoLineFeed/constants';
import { toNoSpace } from '../retypeToNoSpace/constants';

export const TransformationType = {
  toFullWidth: toFullWidth.id,
  toFullWidthAlphabet: toFullWidthAlphabet.id,
  toFullWidthNumber: toFullWidthNumber.id,
  toFullWidthSign: toFullWidthSign.id,
  toFullWidthSpace: toFullWidthSpace.id,
  toFullWidthKana: toFullWidthKana.id,
  toHalfWidtn: toHalfWidtn.id,
  toHalfWidtnAlphabet: toHalfWidtnAlphabet.id,
  toHalfWidtnNumber: toHalfWidtnNumber.id,
  toHalfWidtnSign: toHalfWidtnSign.id,
  toHalfWidtnSpace: toHalfWidtnSpace.id,
  toHalfWidtnKana: toHalfWidtnKana.id,
  toHiragana: toHiragana.id,
  toHiraganaSeion: toHiraganaSeion.id,
  toHiraganaSeionFromDakuon: toHiraganaSeionFromDakuon.id,
  toHiraganaSeionFromSokuon: toHiraganaSeionFromSokuon.id,
  toHiraganaSeionFromYouon: toHiraganaSeionFromYouon.id,
  toKatakana: toKatakana.id,
  toKatakanaSeion: toKatakanaSeion.id,
  toKatakanaSeionFromDakuon: toKatakanaSeionFromDakuon.id,
  toKatakanaSeionFromSokuon: toKatakanaSeionFromSokuon.id,
  toKatakanaSeionFromYouon: toKatakanaSeionFromYouon.id,
  toNoChouon: toNoChouon.id,
  toNoLineFeed: toNoLineFeed.id,
  toNoSpace: toNoSpace.id,
  toCamelCase: 'to-camel-case',
  toKebabCase: 'to-kebab-case',
  toLowerCase: 'to-lower-case',
  toPascalCase: 'to-pascal-case',
  toScreamingSnakeCase: 'to-screaming-snake-case',
  toSnakeCase: 'to-snake-case',
  toTitleCase: 'to-title-case',
  toUpperCase: 'to-upper-case',
  toNfc: 'to-nfc',
  toNfd: 'to-nfd',
  toNfkc: 'to-nfkc',
  toNfkd: 'to-nfkd',
} as const;

export type TransformationType =
  (typeof TransformationType)[keyof typeof TransformationType];

export const ReplaceByMap = {
  [TransformationType.toFullWidth]: toFullWidth,
  [TransformationType.toFullWidthAlphabet]: toFullWidthAlphabet,
  [TransformationType.toFullWidthNumber]: toFullWidthNumber,
  [TransformationType.toFullWidthSign]: toFullWidthSign,
  [TransformationType.toFullWidthSpace]: toFullWidthSpace,
  [TransformationType.toFullWidthKana]: toFullWidthKana,
  [TransformationType.toHalfWidtn]: toHalfWidtn,
  [TransformationType.toHalfWidtnAlphabet]: toHalfWidtnAlphabet,
  [TransformationType.toHalfWidtnNumber]: toHalfWidtnNumber,
  [TransformationType.toHalfWidtnSign]: toHalfWidtnSign,
  [TransformationType.toHalfWidtnSpace]: toHalfWidtnSpace,
  [TransformationType.toHalfWidtnKana]: toHalfWidtnKana,
  [TransformationType.toHiragana]: toHiragana,
  [TransformationType.toHiraganaSeion]: toHiraganaSeion,
  [TransformationType.toHiraganaSeionFromDakuon]: toHiraganaSeionFromDakuon,
  [TransformationType.toHiraganaSeionFromSokuon]: toHiraganaSeionFromSokuon,
  [TransformationType.toHiraganaSeionFromYouon]: toHiraganaSeionFromYouon,
  [TransformationType.toKatakana]: toKatakana,
  [TransformationType.toKatakanaSeion]: toKatakanaSeion,
  [TransformationType.toKatakanaSeionFromDakuon]: toKatakanaSeionFromDakuon,
  [TransformationType.toKatakanaSeionFromSokuon]: toKatakanaSeionFromSokuon,
  [TransformationType.toKatakanaSeionFromYouon]: toKatakanaSeionFromYouon,
  [TransformationType.toNoChouon]: toNoChouon,
  [TransformationType.toNoLineFeed]: toNoLineFeed,
  [TransformationType.toNoSpace]: toNoSpace,
} as const;

export const TransformFunction = {
  [TransformationType.toCamelCase]: recaseCamel,
  [TransformationType.toKebabCase]: recaseKebab,
  [TransformationType.toLowerCase]: recaseLower,
  [TransformationType.toPascalCase]: recasePascal,
  [TransformationType.toScreamingSnakeCase]: recaseScreamingSnake,
  [TransformationType.toSnakeCase]: recaseSnake,
  [TransformationType.toTitleCase]: recaseTitle,
  [TransformationType.toUpperCase]: recaseUpper,
  [TransformationType.toNfc]: retypeToNfc,
  [TransformationType.toNfd]: retypeToNfd,
  [TransformationType.toNfkc]: retypeToNfkc,
  [TransformationType.toNfkd]: retypeToNfkd,
} as const;

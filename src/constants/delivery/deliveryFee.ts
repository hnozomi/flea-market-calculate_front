export type ShippingMethodKeyType =
  | 'delivery100'
  | 'delivery120'
  | 'delivery140'
  | 'delivery160'
  | 'delivery180'
  | 'delivery200'
  | 'delivery60'
  | 'delivery80'
  | 'deliverycompact'
  | 'nekoposu'
  | 'yupack100'
  | 'yupack120'
  | 'yupack140'
  | 'yupack160'
  | 'yupack170'
  | 'yupack60'
  | 'yupack80'
  | 'yupacketplus'
  | 'yupacketpost'
  | 'yupocket'
  | 'noSelect';

export const DELIVERY_FEE = {
  delivery100: { merukari: 105, paypay: 1000, rakuma: 1150 },
  delivery120: { merukari: 1200, paypay: 1100, rakuma: 1350 },
  delivery140: { merukari: 1450, paypay: 1300, rakuma: 1550 },
  delivery160: { merukari: 1700, paypay: 1600, rakuma: 1800 },
  delivery180: { merukari: 0, paypay: 0, rakuma: 2100 },
  delivery200: { merukari: 0, paypay: 0, rakuma: 2500 },
  delivery60: { merukari: 750, paypay: 700, rakuma: 800 },
  delivery80: { merukari: 850, paypay: 800, rakuma: 900 },
  deliverycompact: { merukari: 450, paypay: 380, rakuma: 530 },
  nekoposu: { merukari: 210, paypay: 170, rakuma: 200 },
  noSelect: { merukari: 0, paypay: 0, rakuma: 0 },
  yupack100: { merukari: 1070, paypay: 1000, rakuma: 1150 },
  yupack120: { merukari: 0, paypay: 1100, rakuma: 1350 },
  yupack140: { merukari: 0, paypay: 1300, rakuma: 1500 },
  yupack160: { merukari: 0, paypay: 1600, rakuma: 1500 },
  yupack170: { merukari: 0, paypay: 1800, rakuma: 1500 },
  yupack60: { merukari: 770, paypay: 700, rakuma: 700 },
  yupack80: { merukari: 870, paypay: 800, rakuma: 800 },
  yupacketplus: { merukari: 455, paypay: 0, rakuma: 380 },
  yupacketpost: { merukari: 215, paypay: 175, rakuma: 175 },
  yupocket: { merukari: 230, paypay: 175, rakuma: 180 },
} as const;

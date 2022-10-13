import { useState } from 'react';

import { DELIVERY_FEE, ShippingMethodKeyType } from '@/constants';

export const useMainPageHook = () => {
  const FEE = {
    merukari: 0.1,
    paypay: 0.05,
    rakuma: 0.06,
  };

  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethodKeyType>('noSelect');

  const [profit, setProfit] = useState({
    merukari: { commission: 0, fee: 0, resultNumber: 0 },
    paypay: { commission: 0, fee: 0, resultNumber: 0 },
    rakuma: { commission: 0, fee: 0, resultNumber: 0 },
  });

  const [profit1, setProfit1] = useState({
    merukari: { commission: 0, fee: 0, resultNumber: 0 },
    paypay: { commission: 0, fee: 0, resultNumber: 0 },
    rakuma: { commission: 0, fee: 0, resultNumber: 0 },
  });

  const onClickProfitCalculate = () => {
    const rakumaCommission = Math.floor(sellingPrice * FEE.rakuma);
    const merukariCommission = Math.floor(sellingPrice * FEE.merukari);
    const paypayCommission = Math.floor(sellingPrice * FEE.paypay);

    const rakumaDeliveryFee = DELIVERY_FEE[shippingMethod]['rakuma'];
    const merukariDeliveryFee = DELIVERY_FEE[shippingMethod]['merukari'];
    const paypayDeliveryFee = DELIVERY_FEE[shippingMethod]['paypay'];

    const rakumaProfit = sellingPrice - rakumaCommission - rakumaDeliveryFee;
    const merukariProfit =
      sellingPrice - merukariCommission - merukariDeliveryFee;
    const paypayProfit = sellingPrice - paypayCommission - paypayDeliveryFee;

    setProfit({
      ...profit,
      merukari: {
        commission: merukariCommission,
        fee: merukariDeliveryFee,
        resultNumber: merukariProfit,
      },
      paypay: {
        commission: paypayCommission,
        fee: paypayDeliveryFee,
        resultNumber: paypayProfit,
      },
      rakuma: {
        commission: rakumaCommission,
        fee: rakumaDeliveryFee,
        resultNumber: rakumaProfit,
      },
    });
  };

  const onClickSellingPriceCalculate = () => {
    const a = Number(sellingPrice) + DELIVERY_FEE[shippingMethod]['rakuma'];
    const b = 10;
    const c = 9.34;
    const rakumaSellingPrice = Math.floor((a * b) / c);
    const rakumaCommission = Math.floor(rakumaSellingPrice * 0.066);

    const d = Number(sellingPrice) + DELIVERY_FEE[shippingMethod]['merukari'];
    const e = 10;
    const f = 9;

    const merukariSellingPrice = Math.floor((d * e) / f);
    const merukariCommission = Math.floor(merukariSellingPrice * 0.1);

    const g = Number(sellingPrice) + DELIVERY_FEE[shippingMethod]['paypay'];
    const h = 10;
    const i = 9.5;

    const paypaySellingPrice = Math.floor((g * h) / i);
    const paypayCommission = Math.floor(paypaySellingPrice * 0.05);

    const rakumaDeliveryFee = DELIVERY_FEE[shippingMethod]['rakuma'];
    const merukariDeliveryFee = DELIVERY_FEE[shippingMethod]['merukari'];
    const paypayDeliveryFee = DELIVERY_FEE[shippingMethod]['paypay'];

    setProfit1({
      ...profit1,
      merukari: {
        commission: merukariCommission,
        fee: merukariDeliveryFee,
        resultNumber: merukariSellingPrice,
      },
      paypay: {
        commission: paypayCommission,
        fee: paypayDeliveryFee,
        resultNumber: paypaySellingPrice,
      },
      rakuma: {
        commission: rakumaCommission,
        fee: rakumaDeliveryFee,
        resultNumber: rakumaSellingPrice,
      },
    });
  };

  return {
    onClickProfitCalculate,
    onClickSellingPriceCalculate,
    profit,
    profit1,
    setSellingPrice,
    setShippingMethod,
  };
};

export type MainPageProps = ReturnType<typeof useMainPageHook>;

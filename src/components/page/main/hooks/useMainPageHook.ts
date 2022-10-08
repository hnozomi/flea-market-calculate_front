import { useState } from 'react';

import { DELIVERY_FEE, ShippingMethodKeyType } from '@/constants';

export const useMainPageHook = () => {
  const FEE = {
    merukari: 0.1,
    paypay: 0.05,
    rakuma: 0.06,
  };

  const [sellingPrice, setSellingPrice] = useState(0);
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethodKeyType>('noSelect');
  const [profit, setProfit] = useState({
    merukari: { commission: 0, fee: 0, profit: 0 },
    paypay: { commission: 0, fee: 0, profit: 0 },
    rakuma: { commission: 0, fee: 0, profit: 0 },
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
        profit: merukariProfit,
      },
      paypay: {
        commission: paypayCommission,
        fee: paypayDeliveryFee,
        profit: paypayProfit,
      },
      rakuma: {
        commission: rakumaCommission,
        fee: rakumaDeliveryFee,
        profit: rakumaProfit,
      },
    });

    return { merukariCommission, paypayCommission, rakumaCommission };
  };

  return {
    onClickProfitCalculate,
    profit,
    setSellingPrice,
    setShippingMethod,
  };
};

export type MainPageProps = ReturnType<typeof useMainPageHook>;

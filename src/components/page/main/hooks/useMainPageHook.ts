import { useState } from 'react';

import {
  COMMISSION_FEE,
  DELIVERY_FEE,
  ShippingMethodKeyType,
} from '@/constants';

export const useMainPageHook = () => {
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethodKeyType>('noSelect');

  const [CalculationResult, setProfit] = useState({
    merukari: { commission: 0, fee: 0, resultNumber: 0 },
    paypay: { commission: 0, fee: 0, resultNumber: 0 },
    rakuma: { commission: 0, fee: 0, resultNumber: 0 },
  });

  const [selected, setSelected] = useState('sellingPrice');
  const [displayText, setDisplayText] = useState('販売価格');
  const [errorMessage, setErrorMessage] = useState('');

  // どの計算を行うか
  const onChangeMethodOfCalculation = (selectedValue: string) => {
    const title =
      selectedValue === 'sellingPrice' ? '販売価格' : '確保したい利益';
    setDisplayText(title);
    setSelected(selectedValue);
  };

  //
  const calculateCommission = (sellingPrice: number) => {
    const rakumaCommission = Math.floor(sellingPrice * COMMISSION_FEE.rakuma);
    const merukariCommission = Math.floor(
      sellingPrice * COMMISSION_FEE.merukari,
    );
    const paypayCommission = Math.floor(sellingPrice * COMMISSION_FEE.paypay);

    return { merukariCommission, paypayCommission, rakumaCommission };
  };

  const calculateProfit = () => {
    // 手数料を算出後、利益を求める トグルの一番上
    const { merukariCommission, paypayCommission, rakumaCommission } =
      calculateCommission(sellingPrice);

    const rakumaResult =
      sellingPrice - rakumaCommission - DELIVERY_FEE[shippingMethod]['rakuma'];
    const merukariResult =
      sellingPrice -
      merukariCommission -
      DELIVERY_FEE[shippingMethod]['merukari'];
    const paypayResult =
      sellingPrice - paypayCommission - DELIVERY_FEE[shippingMethod]['paypay'];

    return {
      merukariCommission,
      merukariResult,
      paypayCommission,
      paypayResult,
      rakumaCommission,
      rakumaResult,
    };
  };

  const calculateSellingPrice = () => {
    // 販売価格を算出後、手数料も計算する。トグルの一番下
    const rakumaResult = Math.floor(
      ((sellingPrice + DELIVERY_FEE[shippingMethod]['rakuma']) * 10) / 9.34,
    );
    const { rakumaCommission } = calculateCommission(rakumaResult);

    const merukariResult = Math.floor(
      ((sellingPrice + DELIVERY_FEE[shippingMethod]['merukari']) * 10) / 9,
    );
    const { merukariCommission } = calculateCommission(merukariResult);

    const paypayResult = Math.floor(
      ((sellingPrice + DELIVERY_FEE[shippingMethod]['paypay']) * 10) / 9.5,
    );
    const { paypayCommission } = calculateCommission(paypayResult);

    return {
      merukariCommission,
      merukariResult,
      paypayCommission,
      paypayResult,
      rakumaCommission,
      rakumaResult,
    };
  };

  //====================================================================================

  const onClickProfitCalculate = () => {
    if (shippingMethod === 'noSelect') {
      setErrorMessage('配送方法を選択してください');
      return;
    }

    const {
      merukariCommission,
      merukariResult,
      paypayCommission,
      paypayResult,
      rakumaCommission,
      rakumaResult,
    } =
      selected === 'sellingPrice' ? calculateProfit() : calculateSellingPrice();

    setProfit({
      ...CalculationResult,
      merukari: {
        commission: merukariCommission,
        fee: DELIVERY_FEE[shippingMethod]['merukari'],
        resultNumber: merukariResult,
      },
      paypay: {
        commission: paypayCommission,
        fee: DELIVERY_FEE[shippingMethod]['paypay'],
        resultNumber: paypayResult,
      },
      rakuma: {
        commission: rakumaCommission,
        fee: DELIVERY_FEE[shippingMethod]['rakuma'],
        resultNumber: rakumaResult,
      },
    });
  };

  return {
    CalculationResult,
    displayText,
    errorMessage,
    onChangeMethodOfCalculation,
    onClickProfitCalculate,
    selected,
    setErrorMessage,
    setSellingPrice,
    setShippingMethod,
  };
};

export type MainPageProps = ReturnType<typeof useMainPageHook>;

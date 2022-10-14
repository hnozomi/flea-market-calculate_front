import {
  Box,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { BaseButton, BaseHeader, BaseSelect, BaseStat } from '@/components/ui';

import { MainPageProps } from '../hooks/useMainPageHook';

export const MainContent: FC<MainPageProps> = ({
  CalculationResult,
  displayText,
  errorMessage,
  onChangeMethodOfCalculation,
  onClickProfitCalculate,
  selected,
  setErrorMessage,
  setSellingPrice,
  setShippingMethod,
}) => {
  const onChangeSellingPrice = (e: any) => {
    setSellingPrice(Number(e.target.value));
  };

  const onChangeShippingMethod = (e: any) => {
    e.target.value === ''
      ? setShippingMethod('noSelect')
      : setShippingMethod(e.target.value);
    setErrorMessage('');
  };

  return (
    <>
      <BaseHeader />
      <Box mx="1rem" my="2rem">
        <RadioGroup value={selected} onChange={onChangeMethodOfCalculation}>
          <Stack direction="column">
            <Radio value="sellingPrice">販売価格から利益を計算する</Radio>
            <Radio value="profit">確保したい利益から販売価格を求める</Radio>
          </Stack>
        </RadioGroup>
        <Box mt="1rem">
          <Text>{displayText}</Text>
          <Input
            placeholder="￥"
            type="number"
            onChange={onChangeSellingPrice}
          />
        </Box>
        <Box mt="1rem">
          <HStack>
            <Text>配送方法</Text>
            {errorMessage && <Text color="tomato">{errorMessage}</Text>}
          </HStack>
          <BaseSelect onChange={onChangeShippingMethod} />
        </Box>
        <Box textAlign="right">
          <BaseButton onClick={onClickProfitCalculate}>計算する</BaseButton>
        </Box>
        <BaseStat statNumber={CalculationResult} />
      </Box>
    </>
  );
};

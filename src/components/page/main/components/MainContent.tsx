import { Box, Divider, Input, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { BaseButton, BaseHeader, BaseSelect, BaseStat } from '@/components/ui';

import { MainPageProps } from '../hooks/useMainPageHook';

export const MainContent: FC<MainPageProps> = ({
  onClickProfitCalculate,
  onClickSellingPriceCalculate,
  profit,
  profit1,
  setSellingPrice,
  setShippingMethod,
}) => {
  const onChangeSellingPrice = (e: any) => {
    setSellingPrice(e.target.value);
  };

  const onChangeShippingMethod = (e: any) => {
    setShippingMethod(e.target.value);
  };

  return (
    <>
      <BaseHeader />
      <Box mx="1rem" my="2rem">
        <Box mt="1rem">
          <Text>販売価格から利益を計算する</Text>
          <Text>販売価格</Text>
          <Input placeholder="￥" type="tel" onChange={onChangeSellingPrice} />
        </Box>
        <Box mt="1rem">
          <Text>配送方法</Text>
          <BaseSelect onChange={onChangeShippingMethod} />
        </Box>
        <Box textAlign="right">
          <BaseButton onClick={onClickProfitCalculate}>計算する</BaseButton>
        </Box>
        <BaseStat statNumber={profit} />
        <Stack direction="row" h="3rem" mt="2rem">
          <Divider orientation="horizontal" size="xl" />
        </Stack>
        <Box>
          <Text>確保したい利益から販売価格を求める</Text>
          <Text>確保したい利益</Text>
          <Input placeholder="￥" type="tel" onChange={onChangeSellingPrice} />
        </Box>
        <Box mt="1rem">
          <Text>配送方法</Text>
          <BaseSelect onChange={onChangeShippingMethod} />
        </Box>
        <Box textAlign="right">
          <BaseButton onClick={onClickSellingPriceCalculate}>
            計算する
          </BaseButton>
        </Box>

        <BaseStat statNumber={profit1} />
      </Box>
    </>
  );
};

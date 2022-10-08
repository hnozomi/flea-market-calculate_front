import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { MainPageProps } from '../hooks/useMainPageHook';

export const MainContent: FC<MainPageProps> = ({
  onClickProfitCalculate,
  profit,
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
    <Box mx="1rem">
      <Box mt="1rem">
        <Text>販売価格</Text>
        <Input placeholder="￥" type="tel" onChange={onChangeSellingPrice} />
      </Box>
      <Box mt="1rem">
        <Text>配送方法</Text>
        <Select placeholder="配送方法を選択" onChange={onChangeShippingMethod}>
          <option value="nekoposu">ネコポス</option>
          <option value="yupocket">ゆうパケット</option>
          <option value="yupacketpost">ゆうパケットポスト</option>
          <option value="deliverycompact">宅急便コンパクト</option>
          <option value="delivery60">宅急便(60サイズ)</option>
          <option value="delivery80">宅急便(80サイズ)</option>
          <option value="delivery100">宅急便(100サイズ)</option>
          <option value="delivery120">宅急便(120サイズ)</option>
          <option value="delivery140">宅急便(140サイズ)</option>
          <option value="delivery160">宅急便(160サイズ)</option>
          <option value="delivery180">宅急便(180サイズ)</option>
          <option value="delivery200">宅急便(200サイズ)</option>
          <option value="yupack60">ゆうパック(60サイズ)</option>
          <option value="yupack80">ゆうパック(80サイズ)</option>
          <option value="yupack100">ゆうパック(100サイズ)</option>
          <option value="yupack120">ゆうパック(120サイズ)</option>
          <option value="yupack140">ゆうパック(140サイズ)</option>
          <option value="yupack160">ゆうパック(160サイズ)</option>
          <option value="yupack170">ゆうパック(170サイズ)</option>
          <option value="yupacketplus">ゆうパケットプラス</option>
        </Select>
      </Box>
      <Box textAlign="right">
        <Button mt="1rem" onClick={onClickProfitCalculate}>
          計算する
        </Button>
      </Box>
      <Flex mt="2rem">
        <Stat borderWidth={1} p="1rem">
          <StatLabel>メルカリ</StatLabel>
          <StatNumber>{`￥${profit.merukari.profit}`}</StatNumber>
          <StatHelpText>{`手数料￥${profit.merukari.commission}`}</StatHelpText>
          <StatHelpText>{`配送料￥${profit.merukari.fee}`}</StatHelpText>
        </Stat>
        <Stat borderWidth={1} p="1rem">
          <StatLabel>ラクマ</StatLabel>
          <StatNumber>{`￥${profit.rakuma.profit}`}</StatNumber>
          <StatHelpText>{`手数料￥${profit.rakuma.commission}`}</StatHelpText>
          <StatHelpText>{`配送料￥${profit.rakuma.fee}`}</StatHelpText>
        </Stat>
        <Stat borderWidth={1} p="1rem">
          <StatLabel>PayPayフリマ</StatLabel>
          <StatNumber>{`￥${profit.paypay.profit}`}</StatNumber>
          <StatHelpText>{`手数料￥${profit.paypay.commission}`}</StatHelpText>
          <StatHelpText>{`配送料￥${profit.paypay.fee}`}</StatHelpText>
        </Stat>
      </Flex>
    </Box>
  );
};

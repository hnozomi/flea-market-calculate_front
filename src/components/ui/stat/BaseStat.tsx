import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatProps,
} from '@chakra-ui/react';
import { FC } from 'react';

type StatType = {
  commission: number;
  fee: number;
  resultNumber: number;
};

export type BaseStatProps = StatProps & {
  statNumber: {
    merukari: StatType;
    paypay: StatType;
    rakuma: StatType;
  };
};

export const BaseStat: FC<BaseStatProps> = ({ statNumber, ...props }) => {
  return (
    <Flex mt="2rem">
      <Stat backgroundColor="#fc0339" borderWidth={1} color="white" p="1rem">
        <StatLabel>メルカリ</StatLabel>
        <StatNumber>{`￥${statNumber.merukari.resultNumber}`}</StatNumber>
        <StatHelpText>{`手数料￥${statNumber.merukari.commission}`}</StatHelpText>
        <StatHelpText>{`配送料￥${statNumber.merukari.fee}`}</StatHelpText>
      </Stat>
      <Stat backgroundColor="#262feb" borderWidth={1} color="white" p="1rem">
        <StatLabel>ラクマ</StatLabel>
        <StatNumber>{`￥${statNumber.rakuma.resultNumber}`}</StatNumber>
        <StatHelpText>{`手数料￥${statNumber.rakuma.commission}`}</StatHelpText>
        <StatHelpText>{`配送料￥${statNumber.rakuma.fee}`}</StatHelpText>
      </Stat>
      <Stat backgroundColor="#F8A7A0" borderWidth={1} color="white" p="1rem">
        <StatLabel>PayPayフリマ</StatLabel>
        <StatNumber>{`￥${statNumber.paypay.resultNumber}`}</StatNumber>
        <StatHelpText>{`手数料￥${statNumber.paypay.commission}`}</StatHelpText>
        <StatHelpText>{`配送料￥${statNumber.paypay.fee}`}</StatHelpText>
      </Stat>
    </Flex>
  );
};

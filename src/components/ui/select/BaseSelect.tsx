import { Select, SelectProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseSelectProps = SelectProps;

export const BaseSelect: FC<BaseSelectProps> = ({ ...props }) => {
  return (
    <Select placeholder="配送方法を選択" {...props}>
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
  );
};

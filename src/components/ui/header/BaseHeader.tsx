import { Box, BoxProps, HStack } from '@chakra-ui/react';
import { FC } from 'react';

type BaseHeaderProps = BoxProps;

export const BaseHeader: FC<BaseHeaderProps> = ({ ...props }) => {
  return (
    <HStack
      bgColor="black"
      color="white"
      h="5rem"
      justifyContent="space-between"
      {...props}
    >
      <Box pl="1rem" py="0.5rem">
        フリマ計算
      </Box>
    </HStack>
  );
};

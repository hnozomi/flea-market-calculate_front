import { Box, BoxProps, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';

type BaseHeaderProps = BoxProps;

export const BaseHeader: FC<BaseHeaderProps> = ({ ...props }) => {
  return (
    <HStack
      bgColor="green"
      color="white"
      h="5rem"
      justifyContent="space-between"
      {...props}
    >
      <Box pl="1rem" py="0.5rem">
        <Text as="b" fontSize="2xl">
          フリマ計算
        </Text>
      </Box>
    </HStack>
  );
};

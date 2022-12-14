import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseButtonProps = ButtonProps;

export const BaseButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <Button colorScheme="green" mt="1rem" {...props}>
      {children}
    </Button>
  );
};

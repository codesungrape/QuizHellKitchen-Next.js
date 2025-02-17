import { Text, Title } from '@mantine/core';
import classes from './Header.module.css';

export default function Header() {
    return (
      <>
        <Title ta="center" mt={100}>
          <Text 
            inherit 
            component="span" 
            className={classes.fireText}
          >
            Quiz Hell Kitchen
          </Text>
        </Title>
      </>
    );
}
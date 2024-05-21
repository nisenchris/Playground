import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useLDClient } from 'launchdarkly-react-client-sdk';

const SignIn = ({ setUser }) => {
  const [input, setInput] = useState('');
  const history = useHistory();
  const ldClient = useLDClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(input);

    let context = {
      kind: 'user',
      key: input,
      name: input,
    };

    // Check if the input is an email
    if (input.includes('@')) {
      const [name] = input.split('@');
      context = {
        kind: 'user',
        key: input,
        name: name,
        email: input,
      };
    }

    console.log('LaunchDarkly context:', context);

    if (ldClient) {
      await ldClient.identify(context);
    }

    localStorage.setItem('username', input);
    history.push('/dashboard');
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Sign In</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Username or Email</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username or email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;

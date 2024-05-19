import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useLDClient } from 'launchdarkly-react-client-sdk';

const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const history = useHistory();
  const ldClient = useLDClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
    history.push('/dashboard');
    if (ldClient) {
       ldClient.identify({
        kind: 'user',
        key: username,
        name: username,
      });
    }

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
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

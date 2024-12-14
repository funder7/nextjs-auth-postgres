'use client'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { SubmitButton } from '@/components/submit-button'
import { Box, Link as ChakraLink, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useActionState } from 'react'
import { loginAction } from 'app/actions/login'
import { signIn } from '@/lib/auth'


export default function LoginPage() {

  const [state, action] = useActionState(loginAction, null)

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.50"
    >
      <Box
        width="md"
        borderColor="gray.100"
        borderRadius="2xl"
        backgroundColor="gray.50"
        shadow="xl"
        overflow="hidden"
      >
        <Box divideY="1px" divideColor="gray.200">

          <Box backgroundColor="white" textAlign="center" paddingX="4" paddingY="6" paddingTop="8" >
            <VStack justifyContent="space-between">
              <Heading size="xl" fontWeight="semibold" color="gray.800">
                Sign in
              </Heading>
              <Text textStyle="sm" color="gray.500">
                Use your email and password to sign in
              </Text>
            </VStack>
          </Box>

          <Box display="flex" justifyContent="center" py="6">
            <Form action={action}>
              <Flex paddingTop="2" spaceY="4" direction="column" maxW="initial">
                {state?.error && (
                  <Alert
                    status="error"
                    title={state.title}
                    animationDuration="slowest"
                    animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
                  >{state.detail}</Alert>
                )}
                <SubmitButton>
                  Sign In
                </SubmitButton>
                <Text textAlign="center" textStyle="sm" color="gray.500">
                  {"Don't have an account? "}
                  <ChakraLink asChild fontWeight="semibold" color="gray.800">
                    <NextLink href="/register">
                      Sign up
                    </NextLink>
                  </ChakraLink>
                  {" for free."}
                </Text>
              </Flex>
            </Form>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

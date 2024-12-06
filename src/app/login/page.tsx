import { Form } from '@/components/form'
import { SubmitButton } from '@/components/submit-button'
import { Box, Link as ChakraLink, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { signIn } from 'auth'
import NextLink from 'next/link'

async function login(formData: FormData) {
  "use server"

  await signIn("credentials", {
    redirectTo: "/protected",
    username: formData.get("email") as string,
    password: formData.get("password") as string,
  })
}


export default function LoginPage() {
  return (
    <Flex width="100vw" height="100vh" alignItems="center" justify="center" backgroundColor="gray.50">
      <Box
        zIndex="10"
        backgroundColor="gray.50"
        borderColor="gray.100"
        borderRadius="2xl"
        shadow="xl"
        overflow="hidden"
      >
        <VStack
          alignContent="center" alignItems="center" justifyContent="center" textAlign="center"
          borderColor="gray.200" backgroundColor="white" 
          paddingX="4" paddingY="6" paddingTop="8" gap="3">

          <Heading size="xl" fontWeight="semibold" color="gray.800">Sign In</Heading>
          <Text textStyle="sm" color="gray.500">
            Use your email and password to sign in
          </Text>

          <Form action={login}>
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
              {' for free.'}
            </Text>
          </Form>
        </VStack>
      </Box>
    </Flex>
  )
}

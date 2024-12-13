import { Form } from '@/components/form'
import { SubmitButton } from '@/components/submit-button'
import { Alert } from '@/components/ui/alert'
import { Box, Link as ChakraLink, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { signIn } from 'auth'
import { CredentialsSignin } from 'next-auth'
import NextLink from 'next/link'
import { redirect } from 'next/navigation'


let loginFailed = false;

const login = async function(formData: FormData) {
  "use server"

  try {
    loginFailed = false;

    const result = await signIn("credentials", {
      redirectTo: '/protected',
      username: formData.get("email") as string,
      password: formData.get("password") as string,
    })

    console.debug('login RESULT:', result)

    if (result?.ok) {
      redirect(result.url)
    }
    else {
      loginFailed = true
      console.error('login failed', result)
    }
  }
  catch (e) {
    loginFailed = true

    if(e instanceof CredentialsSignin) {
        // not much to do here (this erro = bad credentials)
    }
    else {
      //throw e // unexpected error
    }
  }
}


export default function LoginPage() {
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
            <Form action={login}>
              <Flex paddingTop="2" spaceY="4" direction="column">
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

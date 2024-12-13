import { Form } from "@/components/form"
import { SubmitButton } from "@/components/submit-button"
import { Box, Link as ChakraLink, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import NextLink from "next/link"
import { redirect } from "next/navigation"
import { createUser, getUser } from "services/user"

async function register(formData: FormData) {
  "use server"

  const email    = formData.get("email") as string
  const password = formData.get("password") as string
  const user     = await getUser(email)

  if (user !== null) {
    return "User already exists" // TODO: Handle errors with useFormStatus?
  }

  await createUser(email, password)
  redirect("/login")
}

export default function RegisterPage() {
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
                Sign Up
              </Heading>
              <Text textStyle="sm" color="gray.500">
                Create an account with your email and password
              </Text>
            </VStack>
          </Box>

          <Box display="flex" justifyContent="center" py="6">
            <Form action={register}>
              <Flex paddingTop="2" spaceY="4" direction="column">
                <SubmitButton>
                  Sign Up
                </SubmitButton>
                <Text textAlign="center" textStyle="sm" color="gray.500">
                  {"Already have an account? "}
                  <ChakraLink asChild fontWeight="semibold" color="gray.800">
                    <NextLink href="/login">
                      Sign in
                    </NextLink>
                  </ChakraLink>
                  {" instead."}
                </Text>
              </Flex>
            </Form>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

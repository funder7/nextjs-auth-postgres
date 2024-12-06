import { Form } from "@/components/form"
import { SubmitButton } from "@/components/submit-button"
import { Box, Link as ChakraLink, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import NextLink from "next/link"
import { redirect } from "next/navigation"
import { createUser, getUser } from "services/user"

async function register(formData: FormData) {
  "use server"

  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const user = await getUser(email)

  if (user !== null) {
    return "User already exists" // TODO: Handle errors with useFormStatus?
  }

  await createUser(email, password)
  redirect("/login")
}

export default function RegisterPage() {
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

          <Heading size="xl" fontWeight="semibold" color="gray.800">Sign Up</Heading>
          <Text textStyle="sm" color="gray.500">
            Create an account with your email and password
          </Text>

          <Form action={register}>
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
          </Form>
        </VStack>
      </Box>
    </Flex>
  )
}

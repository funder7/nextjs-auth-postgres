import { Field } from "@/components/ui/field"
import { Input, VStack } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"

export function Form({
  action,
  children,
}: {
  action: any
  children: React.ReactNode
}) {

  return (
    <form action={action}>
      <VStack gap="4">
        <Field label="Email Address" textTransform="uppercase" color="gray.600" fontWeight="light">
          <Input required type="email" id="email" name="email" placeholder="user@acme.com" autoComplete="email" 
            variant="outline" shadow="sm" />
        </Field>
        <Field label="Password" textTransform="uppercase" color="gray.600">
          <PasswordInput required type="password" id="password" name="password"
           variant="outline" shadow="sm" />
        </Field>
        {children}
      </VStack>
    </form>
  )
}

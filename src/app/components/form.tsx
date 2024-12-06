import { Field } from "@/components/ui/field"
import { Input, VStack } from "@chakra-ui/react"

export function Form({
  action,
  children,
}: {
  action: any
  children: React.ReactNode
}) {

  return (
    <form action={action} >
      <VStack gap="4" paddingX="4" paddingY="3">
        <Field label="Email Address" textTransform="uppercase" color="gray.600" >
          <Input required id="email" name="email" type="email" placeholder="user@acme.com" autoComplete="email" 
            shadow="sm" borderColor="gray.200" />
        </Field>
        <Field label="Password" textTransform="uppercase" color="gray.600">
          <Input required id="password" name="password" type="password" shadow="sm" borderColor="gray.200" />
        </Field>
        {children}
      </VStack>
    </form>
  )
}

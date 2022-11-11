import { FormControl, FormLabel, RadioGroup, HStack, Radio, FormHelperText } from '@chakra-ui/react'
import React from 'react'

const RadioSelect = () => {
  return (
    <FormControl as='fieldset'>
    <FormLabel as='legend'>Favorite Naruto Character</FormLabel>
    <RadioGroup defaultValue='Itachi'>
      <HStack spacing='24px'>
        <Radio value='Sasuke'>Sasuke</Radio>
        <Radio value='Nagato'>Nagato</Radio>
        <Radio value='Itachi'>Itachi</Radio>
        <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
      </HStack>
    </RadioGroup>
    <FormHelperText>Select only if you're a fan.</FormHelperText>
  </FormControl>
  )
}

export default RadioSelect
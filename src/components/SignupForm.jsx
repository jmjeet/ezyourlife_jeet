import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SignupFormUI from './SignupFormUI'
import { INITIAL_FORM, createSchema } from './signupLogic'

function SignupForm() {
  const [activeTab, setActiveTab] = useState('create')

  const form = useForm({
    defaultValues: INITIAL_FORM,
    resolver: zodResolver(createSchema()),
    mode: 'onBlur',
  })

  const { register, handleSubmit, formState: { errors } } = form

  const onSubmit = (data) => {
    console.log('Validated signup form:', data)
  }

  return (
    <SignupFormUI
      activeTab={activeTab}
      register={register}
      errors={errors}
      onTabChange={setActiveTab}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default SignupForm

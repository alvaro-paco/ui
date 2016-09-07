import React from 'react'
import Input from '../Input'
import UncontrolledInput from '../uncontrolled/Input'
import Fieldset from '../Fieldset'

export default {
  title: 'Input',
  icon: 'Input',
  variations: [{
    title: 'Single',
    require: `import Input from '@klarna/ui/Input'
import UncontrolledInput from '@klarna/ui/uncontrolled/Input'`,
    Regular: [
      <Input label='Enter your email' />
    ],
    Uncontrolled: [
      <UncontrolledInput name='input-uncontrolled' label='Enter your email'/>
    ],
    Big: [
      <Input label='Enter your email' big />
    ],
    Giant: [
      <Input label='Enter your email' giant />
    ],
    Focused: [
      <Input label='Enter your email' focus />
    ],
    'Fake focused': [
      <Input label='Enter your email' focus='fake' />
    ],
    Disabled: [
      <Input disabled label='Address' value='16, Corn street' />
    ],
    'With error': [
      <Input label='Invalid email' error value='invalid@' />
    ],
    'With warning': [
      <Input label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
    ]
  }, {
    title: 'With Icons',
    require: `import UncontrolledInput from '@klarna/ui/uncontrolled/Input'
import Fieldset from '@klarna/ui/Fieldset'`,
    Regular: [
      <Fieldset margins>
        <UncontrolledInput
          name='icon-card'
          icon='card'
          label='Please enter your credit card number' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-calendar'
          icon='calendar'
          label='Date of Birth' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-lock'
          icon='lock'
          type='password'
          label='Password' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-person'
          icon='person'
          label='Enter your user name' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-email'
          icon='email'
          label='Enter your email address' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-phone'
          icon='phone'
          label='Mobile number' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-close'
          icon='close'
          label='Enter an incorrect value (?)' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-question'
          icon='question'
          label='Are we sure about these being field icons?' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-check'
          icon='check'
          label='These look like button icons really' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-logout'
          icon='logout'
          label='Write something to log out' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          name='icon-giant'
          giant
          icon='phone'
          label='Line number' />
      </Fieldset>
    ]
  }, {
    title: 'Stacked',
    require: `import UncontrolledInput from '@klarna/ui/uncontrolled/Input'
import Fieldset from '@klarna/ui/Fieldset'`,
    'Two fields': {
      example: [
        <Fieldset margins>
          <UncontrolledInput left size='1/2' name='two-given-name' label='Given name' />
          <UncontrolledInput right size='1/2' name='two-middle-name' label='Middle name' />
        </Fieldset>
      ],
      wide: true
    },
    'Card like form': {
      example: [
        <Fieldset margins>
          <UncontrolledInput name='card-number' label='Card number' />
          <UncontrolledInput left size='1/2' name='card-expiration' label='MM / YY' />
          <UncontrolledInput right size='1/2' name='card-ccv' label='CCV' />
        </Fieldset>
      ],
      wide: true
    },
    Many: {
      example: [
        <Fieldset margins>
          <UncontrolledInput left size='1/2' name='many-given-name' label='Given name' />
          <UncontrolledInput center size='1/4' name='many-middle-name' label='Middle name' />
          <UncontrolledInput right size='1/4' name='many-last-name' label='Last name' />
          <UncontrolledInput left size='1/5' name='many-number' label='Number' />
          <UncontrolledInput right size='4/5' name='many-street-address' label='Street Address' />
          <UncontrolledInput left size='1/3' name='many-pokemon' label='Your favorite pokémon' />
          <UncontrolledInput right size='2/3' name='many-android-iphone' label='Android or iPhone: please explain' />
          <UncontrolledInput left size='2/5' name='many-date-of-birth' label='Date of Birth' />
          <UncontrolledInput right size='3/5' name='many-mobile-phone-number' label='Mobile phone number' />
        </Fieldset>
      ],
      wide: true
    }
  }]
}

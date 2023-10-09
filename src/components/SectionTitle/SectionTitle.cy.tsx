import React from 'react'
import SectionTitle, { SectionTitleProps } from './SectionTitle'

const mockSectionTitleProps = (): SectionTitleProps => ({
  text: 'HelloWorld',
})

describe('<SectionTitle />', () => {
  it('renders', () => {
    const props = mockSectionTitleProps()
    cy.mount(<SectionTitle {...props} />)
    cy.get('[data-cy=title]').should('have.text', props.text)
  })
})

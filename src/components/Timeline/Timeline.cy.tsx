import React from 'react'
import Timeline, { TimelineProps } from './Timeline'

const mockTimelineProps = (): TimelineProps => ({
  title: 'Hi',
  data: [
    {
      subTitle: '123',
      year: '456',
      organization: '789',
      children: null,
    },
  ],
})
describe('<Timeline />', () => {
  it('renders', () => {
    const props = mockTimelineProps()
    cy.mount(<Timeline {...props} />)
    cy.get('[data-cy=title]').should('have.text', props.title)
    props.data.forEach((item) => {
      cy.get(`[data-cy=subTitle${item.organization}${item.subTitle}]`).should(
        'have.text',
        item.subTitle
      )
      cy.get(`[data-cy=year${item.organization}${item.subTitle}]`).should('have.text', item.year)
    })
  })
})

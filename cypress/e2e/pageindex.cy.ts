import { HEADER_LIST } from '../../src/constants/header'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    const sections = [...HEADER_LIST]
    // header
    cy.get(`[data-cy=header]`).should('exist')
    // sections
    sections.forEach((item) => {
      cy.get(`[data-cy=section${item.id}]`).should('exist')
    })
    // footer
    cy.get(`[data-cy=footer]`).should('exist')
  })
})

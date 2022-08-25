describe('Quick check pages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check for contact link', () => {
    cy.get('.Contact').should('have.attr', 'href').and('include', 'contact')
  })
})

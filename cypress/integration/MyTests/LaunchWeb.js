describe('launch the web', () => {
    it('element search', () => {
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers')
        cy.contains('Customers').click()
        cy.url().should('include', '/customers/')
    })
})
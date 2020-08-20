describe('dropdown use', () => {
    it('Dropdown', () => {

        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('cypress')

    })
})
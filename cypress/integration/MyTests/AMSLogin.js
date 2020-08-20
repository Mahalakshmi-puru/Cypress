describe('AMS', () => {
    it('Appointment', () => {
        cy.visit('https://adm.cloudninecare.com/', { failOnStatusCode: false })
        cy.url().should('include', 'cloudninecare')
        cy.get('input[type="email"]', { failOnStatusCode: false }).type('mahalakshmi.purushotham@moolya.com')
        cy.get('input[type="password"]').type('1234maha')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', 'com')
        cy.get('button[id="filterappts"]').click()
        cy.wait(1000)
        cy.get('div[class="css-dvua67-singleValue"]').type('Cloudnine Hospital Old Airport Road')
        cy.contains('Cloudnine Hospital Old Airport Road').click({ force: true })
        cy.get('div.col>div>form>div:nth-of-type(8)').click()
        cy.contains('Testobg Oar').click()
        cy.get('div.col>div>form>div:nth-of-type(10)').click()
        cy.get('button.doc-badge-title.btn.btn-link', { failOnStatusCode: false }).click()

        cy.get('div.col-sm-6:nth-of-type(2)').type('Consultation')
        cy.wait(3000)
        cy.contains('Consultation').click()
            //cy.get('#react-select-11-option-1')
            //.type('{enter}')
            //cy.contains('Consultation').click()
            // cy.get('div:nth-child(1)>div:nth-child(3)>div >a').click()
            // cy.get('div.col-8>div>div>div>div.css-151xaom-placeholder').type('9972196871')
            // cy.wait(3000)
            // cy.contains('Mahalakshmi P')
            // cy.contains('Mahalakshmi P').click()
            // cy.get('button[class="btn btn-primary btn-sm"]').click()
            // cy.get('button[class="btn btn-lg btn-primary "]').click()
    })

})
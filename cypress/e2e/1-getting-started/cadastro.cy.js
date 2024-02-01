describe('teste de cadastro',()=>{
    beforeEach(()=>{
        cy.visit('https://platform.zaia.app/auth/login',{
            failOnStatusCode: false,
        
        })
    })

    it('Teste dos valores dentro do input e label existem na página', () => {
        cy.get('.gap-3 > .flex > .inline-flex').click();
        cy.get('.cl-footerActionLink').click();
       cy.get('.cl-formField__firstName > .cl-formFieldLabelRow > .cl-formFieldLabel').contains('First name');
        cy.get('.cl-formField__lastName > .cl-formFieldLabelRow > .cl-formFieldLabel').contains('Last name');
        cy.get('#firstName-field').type('hussein').should('have.value', 'hussein');
        cy.get('#lastName-field').type('othman').should('have.value', 'othman');
        cy.get('#emailAddress-field').type('hussein@gmail.com').should('have.value', 'hussein@gmail.com');
      });


    

it('exbir menssagem de erro',()=>{

    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('.cl-footerActionLink').click()


    cy.get('#firstName-field').type('hssein')
    cy.get('#lastName-field').type('othman')
    cy.get('#emailAddress-field').type('hussein@gmail.com')
  
    cy.get('.cl-formButtonPrimary').click()
  
    
    })


    it.only('efetuar a cadastro com sucesso',()=>{
        cy.get('.gap-3 > .flex > .inline-flex').click()
        cy.get('.cl-footerActionLink').click()
    
    
        cy.get('#firstName-field').type('amanda muniz')
        cy.get('#lastName-field').type('othman')
        cy.get('#emailAddress-field').type('testecypress74@gmail.com')
        cy.get('.cl-formButtonPrimary').click()
    })

})
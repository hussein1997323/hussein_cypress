describe('first visit the website',()=>{
  
    it('the p contains the correct text',() =>{
    
        cy.visit('https://platform.zaia.app/auth/login')
        cy.get('.gap-3 > :nth-child(2)').contains('Escolha uma das opções abaixo para entrar')   
    })

    it.only('the features on the homepage are correct', () =>{
       cy.visit('https://platform.zaia.app/auth/login') 
       cy.get('.text-sm')
       cy.get('.px-6').eq(0).contains(' 2023 Zaia. All rights reserved. | AI powered by Enablers DAO')
       cy.get('.px-6').eq(0).contains('AI GATEWAY ERA LTDA - CNPJ 49.587.881/0001-88')


    })
    
})
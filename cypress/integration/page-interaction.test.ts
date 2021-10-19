describe('Sum', () => {
    beforeEach(() => { 
        cy.visit('/');
        localStorage.setItem('spendings', JSON.stringify([]));
        localStorage.setItem('sum', JSON.stringify({"rest":1100,"spent":0}));
    })

    it('should change spend and balance depending on insert sum', () => {
        cy.get('input[placeholder="How much"]').type('200');
        cy.get('input[placeholder="What for"]').type('Test');
        cy.get('.list-item .btn').click();
        cy.get('.sum__spend').should('contain', '200');  
        cy.get('.sum__balance').should('contain', '900');  
    })

    it('should open details section', () => {
        cy.get('.details .btn').click();
        cy.get('.details__list').should('be.visible');   
    })

    it('should close details section', () => {
        cy.get('.details .btn').click();
        cy.get('.details .btn').click();
        cy.get('.details__list').should('not.exist');   
    })
})
describe('prueba sobre toDo', ()=>{

    it('agregar elemento',()=>{

        cy.visit('http://localhost:3000/');
        cy.get('.input').click();
        cy.get('.input').type('text');


    })
});
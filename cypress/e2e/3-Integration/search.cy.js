describe('Search',()=>{
    before(()=>{
        cy.log("Ejecutando precondiciones a las pruebas")//Se ejecuta antes de todas las pruebas
    })
    after(function(){
        cy.log("Ejecutando todas las condiciones a las pruebas")//se ejecuta luego de todas las pruebas
    })
    it('search dresses',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');

        /*
        cy.get(.search) el punto es para buscar por clases
        cy.get(#search) el punto es para buscar por id
        cy.get([name="search"]) se busca por otra propiedad
        cy.get(.search).clear() borra todo lo que está escrito
        */


    })
})
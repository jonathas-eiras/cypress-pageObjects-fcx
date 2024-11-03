

export function clickOnElement (element){
  
  return cy.get(element).should('be.visible').click();

}

export function typeValue(element, value){
  return cy.get(element).type(value);

}

export function validateElementText(element, value) {
  return cy.get(element).should('have.text', value)
}

export function verifyIfElementExists(element) {
  cy.get(element).should('exist');
}
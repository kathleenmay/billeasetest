/// <reference types="Cypress" />

const invalidEmail = "testemail"
const invalidMobile = "1234567890"
const validEmail = "testemail1@test.com"
const validMobile = "09123456789"

describe('Registration', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })
    
    it('displays sign up fields', () => {
        cy.visit('https://billease.ph/')
        cy.contains("button", "Apply Now").click()
        cy.url().should("contain", "billease.ph/account/registration")

        cy.get("input[id='email']").should("have.attr", "placeholder", "Email")
        cy.get("input[id='mobile']").should("have.attr", "placeholder", "Mobile")
        cy.get("input[id='agree']").should("have.attr", "type", "checkbox")
        cy.contains("button", "sign up")
    })

    it('validates required fields', () => {
        cy.get("input[id='agree']").check()
        cy.contains("button", "sign up").click()

        cy.get("[class*='flex-col']").find("[class*='text-red-600']").should("have.length", 2)
    })

    it('validates email field', () => {
        cy.get("input[id='email']").type(invalidEmail)
        
        cy.contains("This is not a valid email")
    })

    it('validates mobile field', () => {
        cy.get("input[id='mobile']").type(invalidMobile)
        
        cy.contains("This is not a valid email")
    })

    it("sign up button not enabled if user not ticks the checkbox", () => {
        cy.get("input[id='email']").clear()
        cy.get("input[id='mobile']").clear()

         cy.get("input[id='email']").type(validEmail)
         cy.get("input[id='mobile']").type(validMobile)

        cy.get("input[id='agree']").uncheck()

        cy.contains("button", "sign up").should("not.be.enabled")
    })

    it("sign up button is enabled if user ticks the checkbox", () => {
        cy.get("input[id='agree']").check()

        cy.contains("button", "sign up").should("be.enabled")
    })
})
/// <reference types="Cypress" />

const invalidEmail = "testemail"
const messageLessThan5 = "Lore"
const validName = "Test Name"
const validEmail = "testemail1@test.com"
const validMessage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

describe("Contact Us page", () => {
    beforeEach(() => {
      cy.viewport(1280, 720)

      cy.visit('https://billease.ph/contact-us/')
    })

    describe("Send us a message form", () => {
        it("validates required fields in Send us a message form", () => {
            cy.get("[type='submit']").contains("Submit").click()
      
            cy.get(".mt-3").find("[class*='h-6 text-red-600']").should("have.length", 4)
          })

          it("validates email field", () => {
            cy.get("input[placeholder='Enter your email']").type(invalidEmail)
    
            cy.contains("This is not a valid email")
        })

        it("validates Message field", () => {
            cy.get("textarea[placeholder='Enter your message']").type(messageLessThan5)
    
            cy.contains("You should write more characters")
        })

        it("successful submit of message", () => {
            cy.get("input[placeholder='Enter your name']").type(validName)
            cy.get("input[placeholder='Enter your email']").clear()
            cy.get("input[placeholder='Enter your email']").type(validEmail)
            cy.get("textarea[placeholder='Enter your message']").clear()
            cy.get("textarea[placeholder='Enter your message']").type(validMessage)
            cy.get("input[type='checkbox']").check()
    
            cy.clearCookies()
            cy.get("[type='submit']").contains("Submit").click()
    
            cy.contains("Thank you for your message! We'll get back to you as soon as we can.")
        })
    })

    it("opens Privacy Policy", () => {
      cy.get(".mt-3").contains("Privacy Policy").invoke('removeAttr', 'target').click()

      cy.url().should("contain", "billease.ph/privacy")
    })

    // FAILED (Link is still for Privacy Policy)
    // it("opens Terms and Conditions", () => {
    //   cy.get(".mt-3").contains("Terms & Conditions").invoke('removeAttr', 'target').click()

    //   cy.url().should("contain", "billease.ph/terms")
    // })

    it("opens Live Chat page", () => {
        cy.contains("Start Live Chat").invoke('removeAttr', 'target').click()

        cy.url().should("contain", "chat.billease.ph/chat")
    })
  })
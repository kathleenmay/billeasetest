/// <reference types="Cypress" />

describe('BillEase Site navigation', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)

    cy.visit('https://billease.ph/')
  })
  
  it('goes to Billease site', () => {
    cy.get(".nav-header").should("have.length", 6)
  })

  it("navigates to Why BillEase", () => {
    cy.contains("Why BillEase").click()

    cy.url().should("contain", "billease.ph/#why")

    cy.get("[class='text-4xl text-subHeader font-bold']").contains("Why BillEase")
  })

  it("navigates to Registration page", () => {
    cy.contains("button", "Apply Now").click()

    cy.url().should("contain", "billease.ph/account/registration")
  })

  it("navigates to How It Works", () => {
    cy.contains("How It Works").click()

    cy.url().should("contain", "billease.ph/#how_it_works")

    cy.get("[id='how_it_works']").find("img").should("have.attr", "alt", "How it works")
  })

  it("navigates to Shops", () => {
    cy.contains("Shops").click()

    cy.url().should("contain", "billease.ph/shops")
  })

  it("navigates to For Merchants", () => {
    cy.get("a").contains("For Merchants").invoke('removeAttr', 'target').click()

    cy.url().should("contain", "billease.ph/partners")
  })

  it("navigates to About Us", () => {
    cy.contains("About Us").click()

    cy.url().should("contain", "billease.ph/about-us")
  })

  it("navigates to Contact Us", () => {
    cy.contains("Contact Us").click()

    cy.url().should("contain", "billease.ph/contact-us")
  })

  it('navigates to FAQ', () => {
    cy.get("a").contains("FAQ").invoke('removeAttr', 'target').click({force:true})

    cy.url().should("contain", "billease.ph/faq")
  })

  it('navigates to Privacy Policy', () => {
    cy.get("a").contains("Privacy").invoke('removeAttr', 'target').click({force:true})

    cy.url().should("contain", "billease.ph/privacy")
  })

  it('navigates to Terms and Conditions', () => {
    cy.get("a").contains("Terms and conditions").invoke('removeAttr', 'target').click({force:true})

    cy.url().should("contain", "billease.ph/terms")
  })

  it('navigates to Blog', () => {
    cy.get("a").contains("Blog").invoke('removeAttr', 'target').click({force:true})

    cy.url().should("contain", "billease.ph/blog")
  })

  it('navigates to Bug Bounty', () => {
    cy.get("a").contains("Bug Bounty").invoke('removeAttr', 'target').click({force:true})

    cy.url().should("contain", "billease.ph/bug-bounty")
  })
})
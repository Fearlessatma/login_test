describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('https://sakshingp.github.io/assignment/login.html');
    });


  //login with only alphabets
    it('login with alphabets',()=>{
        cy.get('#username').type('username');
        cy.get('#password').type('password');
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })
    //login with only numbers

    it('login with numbers',()=>{
        cy.get('#username').type('123456');
        cy.get('#password').type('123456');
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })

    //login with only special characters
    it('login with special characters',()=>{
        cy.get('#username').type('!@#$%');
        cy.get('#password').type('!@#$%');
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })

    //login with alphanumeric
    it('login with alphanumeric',()=>{
        cy.get('#username').type('user123');
        cy.get('#password').type('pass123');
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })

    //login with alphabets and special charcter
    it('login with alpha and special char',()=>{
        cy.get('#username').type('user@#$');
        cy.get('#password').type('pass@#$');
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })

    //login with numericals and special characters
    it('login with numeric and special char',()=>{
        cy.get('#username').type('123@#$');
        cy.get('#password').type('123!@#');
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })



    //login with all alphabets numerical and special character
    it('login with all',()=>{
        cy.get('#username').type('user123*@');
        cy.get('#password').type('pass123*@');
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })

    //login with only username
    it('login with only username',()=>{
        cy.get('#username').type('user123');
        //cy.get('#password').type('pass123');
        cy.get('#log-in').click();
    
    })

    //login with only password
    it('login with only password',()=>{
        //cy.get('#username').type('user123');
        cy.get('#password').type('pass123');
        cy.get('#log-in').click();
    
    })

    //login with no input
    it('login with no input',()=>{
        //cy.get('#username').type('user123');
        //cy.get('#password').type('pass123');
        cy.get('#log-in').click();
    
    })

    //login with clicking remember me
    it('login with clicking remember me',()=>{
        cy.get('#username').type('user123');
        cy.get('#password').type('pass123');
        cy.get('.form-check-label').click();
        cy.get('#log-in').click();
        cy.get('#amount').click();
    
    })

    
  });
  
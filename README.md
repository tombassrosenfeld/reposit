**Reposit Tech test**

*Approach*
I have opted for a basic barebones ts project as I only really need to create and test functions in order to satisfy the brief.
I used Windsurf to scaffold the project, including the installation and setup of TypeScript and Jest. From that point I wrote the code unassisted by AI. I feel this will give you a more accurate representation of where I am technically.

I used libraries for csv parsing and postcode validation.

*Setup*

To run the tests, open a terminal, clone the repo, navigate into the project and run `npm i`. 

Run `npm run test` to run the test suite.

*Limitations*

I realise that there are some missing unit tests for some of my data utility functions. Given the time I have for this I focussed on testing the functions that meet the brief. Given more time I would rectify that.



*The brief:*

You have been given two files of comma separated values, a list of properties and a list of tenants associated with those properties:

Your task is to write code that meets the requirements outlined below.



Guidelines

- You don't need to provide a user interface or API. We recommend a simpler solution such as passing unit tests.

- Please code your solution in Typescript.

- It should run in node.js.

- We value simplicity

- We value elegant solutions and clean code

- We value automated tests

- We value clear, concise, and readable documentation for communication and an entry point to the solution e.g. a README.md

- We would like to be able to run the code ourselves.

Once you are finished, please provide a link to your repository below.



Requirements

1. Calculate the average rent of properties by region. Please code a solution that satisfies the following acceptance criteria:

   - Accepts a region to get the average rent for.

   - Returns the average rent for the given region as a number.

2. Calculate the monthly rent, per tenant for a given property. Please code a solution that satisfies the following acceptance criteria:

   - Accepts a property.

   - The total property monthly rent is split equally between the tenants.

   - The monthly rent, per tenant can be requested in pence or pounds.

   - If there are no tenants, an error should be thrown.

   - Returns the average monthly rent, per tenant as a number.

3. Validate the postcode of all properties. Please code a solution that satisfies the following acceptance criteria:

   - Able to validate whether a postcode is a valid UK postcode.

     -  Returns a list of property IDs which have an invalid postcode.

4. Get the 'status' of a property. Please code a solution that satisfies the following acceptance criteria:

   - Accepts a property.

   - If a property has no tenants, return "PROPERTY_VACANT".

   - If a property has at least one tenant but fewer tenants than the capacity and the current date is not past the tenancy end date, return "PARTIALLY_VACANT".

   - If a property has tenants and no capacity, and the current date is not past the tenancy end date, return "PROPERTY_ACTIVE".

   - If a property has at least one tenant but the current date is past the tenancy end date, return "PROPERTY_OVERDUE".
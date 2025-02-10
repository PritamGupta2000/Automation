SauceDemo Automation Testing

This project automates testing for the SauceDemo website using WebDriverIO, ChromeDriver, and Allure Reports. It covers login scenarios, cart functionality, and checkout flows.

📝 Test Scenarios

Locked Out User: Ensure the correct error message appears on login failure.

Standard User: This test verifies a smooth shopping experience by adding multiple items to the cart, completing the checkout process, and confirming the order details.



🚀 Running Tests

Run all tests:

npx wdio wdio.conf.js

Run a specific test:

npx wdio wdio.conf.js --spec ./Testing/test_login.js

📊 Generate Report

Generate and open the Allure report:

npx allure generate allure-results --clean -o allure-report
npx allure open allure-report


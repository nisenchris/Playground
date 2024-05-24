# LaunchDarkly React Example Project

## Overview

This project is a sample implementation demonstrating the usage of LaunchDarkly with a React application. The application showcases feature flags, custom events, metrics and experiments using LaunchDarkly. The project also utilizes Chakra UI for styling and layout.

## Features

- Feature flag management with LaunchDarkly
- Custom events tracking for user interactions
- Flag triggers for automation
- Metrics tracking and experiments
- Responsive UI with Chakra UI

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Git](https://git-scm.com/)

## Setup Instructions

Follow these steps to set up and run the project locally on your machine:

### Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/nisenchris/LaunchDarkly-Assignment.git
   ```

### Step 2: Navigate to the Project Directory

1. Change into the project directory:

   ```bash
   cd LaunchDarkly-Assignment
   ```

### Step 3: Install Project Dependencies

1. Install the project dependencies using npm:

   ```bash
   npm install
   ```

### Step 4: Create an Environment File

1. Create a `.env` file in the root directory of the project.
2. Add LaunchDarkly's SDK Key as an environment variable. 

   ```env
   REACT_APP_LAUNCHDARKLY_CLIENTSIDE_ID=your-client-side-id
   ```

### Step 5: Start the Development Server

1. Start the development server using npm:

   ```bash
   npm start
   ```

2. This command will start the development server and open your project in the default web browser. If it doesn’t open automatically, you can access it by navigating to `http://localhost:3000` in your web browser.

<!-- ### Step 6: Verify the Application

1. Ensure the application loads correctly.
2. Navigate through the various pages (e.g., landing page, sign-in page, dashboard) to verify that they function as expected.
3. Verify that the feature flags are working correctly by toggling them on and off in your LaunchDarkly account and observing the changes in the application.

### Step 7: Test the Purchase Button Tracking

1. Click on the purchase buttons in both `ProductCard` and `PurchaseCard`.
2. Check your LaunchDarkly dashboard to ensure the events are being tracked correctly.

### Step 8: Check the Console for Errors

1. Open the browser’s developer console (usually accessible by pressing `F12` or `Ctrl+Shift+I`).
2. Ensure there are no errors or warnings that need to be addressed. -->

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [LaunchDarkly](https://launchdarkly.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Creative Tim](https://www.creative-tim.com/)

By following these instructions, you should be able to set up and run the project locally on your machine successfully. If you encounter any issues, please refer to the documentation or open an issue in the repository.
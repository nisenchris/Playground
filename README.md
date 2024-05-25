# LaunchDarkly React Example Project

## Overview

This project is a sample implementation demonstrating the usage of LaunchDarkly with a React application. The application showcases feature flags, custom events, metrics and experiments using LaunchDarkly. The project also utilizes Chakra UI for styling and layout.

## Features

- Feature flag management with LaunchDarkly
- Custom events tracking
- Flag triggers for automation
- Metrics tracking and experiments
- Responsive UI with Chakra UI

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Git](https://git-scm.com/)

## Setup Instructions

Follow these steps to set up and run the project locally:

### Step 1: Clone the Repository

1. Open your terminal.
2. Navigate to your desired directory.
3. Clone the repository:

   ```bash
   git clone https://github.com/nisenchris/LaunchDarkly-Assignment.git
   ```

### Step 2: Navigate to the Project Directory

1. Change to the project directory:

   ```bash
   cd LaunchDarkly-Assignment
   ```

### Step 3: Install Project Dependencies

1. Install dependencies using npm:

   ```bash
   npm install
   ```

### Step 4: Create an Environment File

1. Create a `.env` file in the root directory.
2. Add your LaunchDarkly SDK Key:

   ```env
   REACT_APP_LAUNCHDARKLY_CLIENTSIDE_ID=your-client-side-id
   ```

### Step 5: Start the Development Server

1. Start the development server using npm:

   ```bash
   npm start
   ```

2. This will open your project in the default web browser at `http://localhost:3000/Dashboard`. If it doesn’t open automatically, navigate there manually.

## Configure LaunchDarkly

### Create Feature Flags
1. **Flag Key**: `lineChart`
   - **Configuration**: Custom
   - **Flag type**: Boolean
   - **Client-side SDK availability:** SDKs using Client-side ID
2. **Flag Key**: `newChartData`
   - **Configuration**: Custom
   - **Flag type**: Boolean
   - **Client-side SDK availability:** SDKs using Client-side ID
   - **Optional**: Create a [trigger rule](https://docs.launchdarkly.com/home/releases/triggers?site=launchDarkly#create-flag-triggers). 
3. **Flag Key**: `purchaseCard`
   - **Configuration**: Custom
   - **Flag type**: Boolean
   - **Client-side SDK availability:** SDKs using Client-side ID
   - Turn it on.
### Create a Metric

1. **Name**: purchase-button-click
2. **Event Type**: Custom
3. **Event Key**: `Purchase Button Click`
4. **Success Criteria**: Higher than baseline
5. **Unit Aggregation Method**: Sum individual unit values
6. **Analysis Method**: Mean
7. **Randomization Units**: Users

### Create an Experiment
1. **Name**: "Purchase Card"
2. **Hypothesis**: "A dedicated card with a clear CTA will increase product purchases."
3. **Experiment Type**: Feature change
4. **Randomization Unit**: User
5. **Audience Attributes**: Select relevant attributes for analysis.
6. **Select Metrics**: Choose `purchase-button-click`
7. **Flag Variations**: Choose `purchaseCard`
8. **Set Audience**: Default rule serving 50% true and 50% false.
9. **Finish and Start the Experiment**.

## Verify the Application

### Scenario 1: Release and Remediate
1. Disable `lineChart` and `newChartData` flags.
2. Visit `http://localhost:3000/Dashboard`.
3. Enable `lineChart` Flag.
4. The new chart should appear.
5. `newChartData` simulates a data migration. Enable it to start using the new data.
6. An incomplete chart and a console error will appear: `"Error: newChartData flag is enabled and causing issues."`
7. Disable the `newChartData` flag using the flag trigger or manually to rollback without impacting customers.

### Scenario 2: Target
1. Add rules to the `lineChart` flag. Example rules:
   - **Target Individuals**: User: `devUser`
   - **Custom Rule**: user email ends with `@abccompany.com`.
2. Test with different users at `http://localhost:3000/signin`.

### Scenario 3: Experimentation
1. With the "Purchase Card" experiment running:
2. Visit `http://localhost:3000/` in incognito mode.
3. You might see a different card designs.
4. Click the Purchase link or button to track events.
5. Repeat to generate experiment data.
5. Check `Metrics > activity` or `Experiments > results` in LaunchDarkly.

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [LaunchDarkly](https://launchdarkly.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Creative Tim](https://www.creative-tim.com/)

By following these instructions, you should be able to set up and run the project locally on your machine successfully. If you encounter any issues, please refer to the documentation or open an issue in the repository.
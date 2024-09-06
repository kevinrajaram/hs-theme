# Wayfx/RTNU Shopify Workflow

This workflow assumes you know the basics in the following:

- Git using [GitHub](https://docs.github.com/en/get-started)
- [Shopify CLI](https://shopify.dev/apps/tools/cli/getting-started)

## Step 1

We will be using GitHub to store theme files and keep separate branches as work is being done. This will enable multiple developers to work on the theme without overriding each other's work.

1. Clone the repo into a folder of your choice on your computer.

2. Navigate to the folder containing the cloned repo using a Terminal app of your choice, or open it in [VS Code](https://code.visualstudio.com/), which has a built-in terminal. You will be, by default, on the 'master' branch.

3. Create a new **feature** branch from **master** for each task. *(Every feature branch should contain the* **feature/** *prefix).*

   This can be done️ with the following command lines ⚡

   ```bash
   git checkout master
   git pull origin master
   git checkout -b feature/name_of_feature
   ```

   The command above will grab all the latest updates from the **master** branch and then create a new **feature** branch (in this case, **feature/name_of_feature**).

   *If you prefer to stay away from the command prompt method all together - no problem*, you can download the [**GitHub Desktop**](https://desktop.github.com/) *desktop app for a more visual appearance.*

4. Run the following command to install all necessary packages to use in development

   ```bash
   npm install
   ```

5. Now you are ready to start developing on your own branch 🙌

## Step 2

To ensure all files (both locally and on Shopify) stay updated, we will be using Shopify CLI to push and pull changes to and from themes.

**NOTE: If you are using Shopify CLI version 3.xx.x, please refer to these changes https://shopify.dev/themes/tools/cli/migrate#workflow-changes**

**Follow these important steps to keep changes between development machine and Shopify store in sync.**

1. Duplicate the live theme and rename the new theme to your choice

2. Log in to the store via Shopify CLI using the following command: *To have a successful attempt, please log in via browser first using https://SHOPNAME.myshopify.com/admin/*

   ```
   shopify login --store SHOPNAME.myshopify.com
   ```

   After running the command, a new window will open up in the browser notifying you of a successful authentication. You will probably only need to do this once, unless you get an error in the terminal window prompting you to log in. If you get an error, run the command again to re-authenticate with Shopify.

3. To pull in the theme you duplicated, use the following command

   ```
   shopify theme pull
   ```

   A list of themes will appear like this:

   ![img](https://camo.githubusercontent.com/b2c8eb11c1b9593935d30484e0a48eb408130d8561273de7742e4e20a1d4dbaf/68747470733a2f2f63646e2e73686f706966792e636f6d2f732f66696c65732f312f313737352f313832352f66696c65732f53686f706966795f7468656d655f70756c6c5f636f6d6d616e642e706e673f763d31363531353034363135)

   Follow the prompt to find and select your theme. You will get a message "✓ Theme pulled successfully".

   **IMPORTANT** Run this command before starting any work, as it'll pull in changes if someone else edited code via Shopify's theme editor. This will make sure you have those changes in your local copy of the theme as well.

4. To begin development, run the following commands:

   1. ```bash
      shopify theme serve
      ```

      This will spin up a local server environment with a URL to preview in your browser.

   2. In a new terminal window/tab, run the following command to watch for style changes in the `src/scss/theme.scss` file and JavaScript changes in the `src/js/theme.js` file. This will compile and output theme.css and theme.js files in the `assets` directory.

      ```bash
      npm run watch
      ```

   3. Once finished making all SCSS and JS changes, the files will need to be compiled for production using the following command:

      ```bash
      npm run prod
      ```

## Step 3

After all development work is completed, you'll need to push your changes to GitHub and Shopify.

#### GitHub Steps

1. Stage all changes with a commit message

2. Push changes to your branch you created in step 1 with the following command `git push -u origin feature/name_of_feature`

3. Your changes will now be updated on GitHub on the branch you created.

4. Once your work is approved to go live,

   1. If it has been a few since the last update, you'll need to make sure your theme is updated with all of the changes (if any) from the ```main``` branch. To do so, run the following, one line at a time:

      1. ```bash
         git checkout main
         git pull
         git checkout feature/name_of_feature
         git merge main
         ```

   2. The above code will merge in any changes the main branch has that your feature branch doesn't have.

   3. Submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to have it merged into the 'main' branch.

#### Shopify Steps

1. From your terminal window in step 2, run the following command to push your local theme changes back up to the theme you duplciated on Shopify.

2. Recompile the files by running the following command ```npm run build``` then run the following:

   ```
   shopify theme push
   ```

   A list of themes will appear again like the following. Make sure to select the correct one as it'll override that theme will all changes you've made locally.

    [![img](https://camo.githubusercontent.com/21d473758a29ce140babf33cb0b772275f04cd52f64a28843655a60adf9ef65e/68747470733a2f2f63646e2e73686f706966792e636f6d2f732f66696c65732f312f313737352f313832352f66696c65732f53686f706966795f7468656d655f707573685f636f6d6d616e642e706e673f763d31363531353034363135)](https://camo.githubusercontent.com/21d473758a29ce140babf33cb0b772275f04cd52f64a28843655a60adf9ef65e/68747470733a2f2f63646e2e73686f706966792e636f6d2f732f66696c65732f312f313737352f313832352f66696c65732f53686f706966795f7468656d655f707573685f636f6d6d616e642e706e673f763d31363531353034363135)

3. Once you've successfully pushed your local theme changes to Shopify, you can go ahead and generate a 'Preview' link to share **and/or** publish the theme with approval.

### Step 4

Repeat steps for each new feature/update.
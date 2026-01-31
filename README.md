# IT23376236
Automated quality assessment of the Swift Translator system using Playwright. This project evaluates Singlish-to-Sinhala transliteration through 34 functional scenarios—covering tenses, complex structures, and mixed-language robustness-alongside UI validation of real-time output synchronization
# IT3040-ITPM Assignment 1: Singlish to Sinhala Transliteration

### Project Description
[cite_start]This project evaluates the system at https://www.swifttranslator.com/ for transliteration accuracy. [cite: 13]

### How to Install Dependencies
1. Ensure Node.js is installed.
2. Run the following command:
   ```bash
   npm install
   npx playwright install chromium
   npx playwright test
   npx playwright show-report

## **Part 2: Step-by-Step Process to Run Tests**
If you are performing the assignment tasks now, follow these steps to execute your automation successfully:

### **1. Set Up the Environment**
* Open your project folder in **VS Code**.
* Open the integrated terminal (`Ctrl + Shift + `).
* Ensure your `assignment1.spec.ts` file is inside the `tests/` folder[cite: 68].

### **2. Install Libraries**
* Execute `npm install`. This reads your `package.json` and downloads the Playwright libraries.
* Execute `npx playwright install chromium`. This ensures the automated browser is ready to navigate to the Swift Translator website[cite: 13].

### **3. Execute the Automation**
* Run `npx playwright test`. 
* **What happens during execution:** 1. Playwright opens a "headless" browser (you won't see it pop up).
    2. It navigates to the website[cite: 302].
    3. It fills the Singlish text area for each of your 34 functional scenarios[cite: 303].
    4. It waits for the real-time Sinhala output to update[cite: 304].
    5. It compares the **Actual Output** against your **Expected Output** regex[cite: 305].



**4. Verify and Record**
* After the run, check the terminal for the pass/fail status of each **TC ID** (e.g., `Pos_Fun_001`)[cite: 307].
* If a test fails, use `npx playwright show-report` to see exactly what the "Actual Output" was so you can record it in your Excel file[cite: 305, 387].

 **5. Submission Cleanup**
* Once tests pass, ensure your **GitHub repository** is updated with the latest code[cite: 77].
* Ensure the repository is **Publicly Accessible**[cite: 79].
* Finalize your **Excel file** (Appendix 2) by filling in the "Status" and "Accuracy Justification" columns based on your local test results[cite: 80, 381].

**Would you like me to help you write the professional "Accuracy Justifications" for your 10 negative test cases to ensure your Excel sheet is ready for submission?**


   

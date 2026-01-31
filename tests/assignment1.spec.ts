import { test, expect } from '@playwright/test';

/**
 * IT3040-ITPM Assignment 1
 * System: https://www.swifttranslator.com/
 * Scenarios: 24 Positive, 10 Negative, 1 UI
 */

const testScenarios = [
  // --- POSITIVE FUNCTIONAL CASES (24) ---
  { id: 'Pos_Fun_001', name: 'Simple present tense', input: 'mama pothak kiyavanavaa.', expected: /මම පොතක් කියවනවා./ },
  { id: 'Pos_Fun_002', name: 'Simple past tense', input: 'eyaa iiyee gedhara aava.', expected: /එයා ඊයේ ගෙදර ආවා./ },
  { id: 'Pos_Fun_003', name: 'Simple future tense', input: 'api heta kandy yanavaa.', expected: /අපි හෙට kandy යනවා./ },
  { id: 'Pos_Fun_004', name: 'Compound sentence', input: 'mama kadeyata yanavaa saha paan gannavaa.', expected: /මම කඩයට යනවා සහ පාන් ගන්නවා./ },
  { id: 'Pos_Fun_005', name: 'Complex sentence', input: 'vaessa nisaa ada mata office enna parakku vunaa.', expected: /වැස්ස නිසා අද මට office එන්න පරක්කු වුණා./ },
  { id: 'Pos_Fun_006', name: 'Interrogative question', input: 'oyaata kohomadha dhaen?', expected: /ඔයාට කොහොමද දැන්\?/ },
  { id: 'Pos_Fun_007', name: 'Imperative command', input: 'vahaama potha dhenna.', expected: /වහාම පොත දෙන්න./ },
  { id: 'Pos_Fun_008', name: 'Negative sentence', input: 'mama ada enne naehae.', expected: /මම අද එන්නේ නැහැ./ },
  { id: 'Pos_Fun_009', name: 'Common greeting', input: 'suba udhaeesanak oyaata!', expected: /සුබ උදෑසනක් ඔයාට!/ },
  { id: 'Pos_Fun_010', name: 'Polite request', input: 'karuNaakaralaa mata udhavvak karanna puLuvandha?', expected: /කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද\?/ },
  { id: 'Pos_Fun_011', name: 'Informal phrasing', input: 'ooka dhiyan machan.', expected: /ඕක දියන් මචන්./ },
  { id: 'Pos_Fun_012', name: 'Plural pronoun', input: 'eyaalaa ada enavaa.', expected: /එයාලා අද එනවා./ },
  { id: 'Pos_Fun_013', name: 'Repeated emphasis', input: 'hari hari mama ennam.', expected: /හරි හරි මම එන්නම්./ },
  { id: 'Pos_Fun_014', name: 'Technical terms', input: 'WiFi password eka dhenna.', expected: /WiFi password එක දෙන්න./ },
  { id: 'Pos_Fun_015', name: 'Brand names', input: 'mama WhatsApp pavichchi karanavaa.', expected: /මම WhatsApp පාවිච්චි කරනවා./ },
  { id: 'Pos_Fun_016', name: 'Place names', input: 'siiyaa Colombo yanna hadhannee.', expected: /සීය Colombo යන්න හදන්නේ./ },
  { id: 'Pos_Fun_017', name: 'Abbreviations', input: 'PIN code eka dhenna.', expected: /PIN code එක දෙන්න./ },
  { id: 'Pos_Fun_018', name: 'Currency format', input: 'meeka Rs. 500 venavaa.', expected: /මේක Rs. 500 වෙනවා./ },
  { id: 'Pos_Fun_019', name: 'Time format', input: '7.30 AM ekata enna.', expected: /7.30 AM එකට එන්න./ },
  { id: 'Pos_Fun_020', name: 'Measurement units', input: 'mata kiri 1kg oonee.', expected: /මට කිරි 1kg ඕනේ./ },
  { id: 'Pos_Fun_021', name: 'Punctuation handling', input: 'ayiyo! eeka unadha?', expected: /අයියෝ! ඒක වුණාද\?/ },
  { id: 'Pos_Fun_022', name: 'Formatting spaces', input: 'api  passee  kathaa  karamu.', expected: /අපි පස්සේ කතා කරමු./ },
  { id: 'Pos_Fun_023', name: 'Long Formal News Paragraph', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara...', expected: /ද්විත්ව සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර/ },
  { id: 'Pos_Fun_024', name: 'Pronoun variation We', input: 'api heta trip ekak yamudha?', expected: /අපි හෙට trip එකක් යමුද\?/ },

  // --- NEGATIVE FUNCTIONAL CASES (10) ---
  { id: 'Neg_Fun_001', name: 'Missing spaces', input: 'mamagedharayanavaa', expected: /මමගෙදරයනවා/ },
  { id: 'Neg_Fun_002', name: 'Phonetic ambiguity', input: 'mama kanaawa', expected: /මම කනාව/ },
  { id: 'Neg_Fun_003', name: 'Long paragraph stress', input: 'A'.repeat(500), expected: /.+/ },
  { id: 'Neg_Fun_004', name: 'Mixed symbols', input: 'mama $ yanavaa @', expected: /මම \$ යනවා @/ },
  { id: 'Neg_Fun_005', name: 'Double negation', input: 'mama naehae naehae.', expected: /මම නැහැ නැහැ./ },
  { id: 'Neg_Fun_006', name: 'Complex tech phrase', input: 'GPU ekee driver update eka fail vunaa.', expected: /GPU එකේ driver update එක fail වුණා./ },
  { id: 'Neg_Fun_007', name: 'Unknown colloquialism', input: 'adoo siraavata?', expected: /අඩෝ සිරාවට\?/ },
  { id: 'Neg_Fun_008', name: 'Inconsistent casing', input: 'MaMa GeDhArA yAnAvAa.', expected: /මාමා ගෙදර යනවා./ },
  { id: 'Neg_Fun_009', name: 'Heavy mixed punctuation', input: 'mama??? yanavaa!!!', expected: /මම\?\?\? යනවා!!!/ },
  { id: 'Neg_Fun_010', name: 'Joined word variations', input: 'matapaankannaoonee', expected: /මටපාන්කන්නඕනේ/ }
];

test.describe('Singlish to Sinhala Transliteration Automation', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  for (const scenario of testScenarios) {
    test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
      // Step 4: Using Option A - Placeholder Selector
      const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]'; 
      const outputSelector = 'div.bg-slate-50';

      // 1. Enter Singlish text 
      await page.fill(inputSelector, scenario.input);

      // 2. Observe real-time output [cite: 304]
      const output = page.locator(outputSelector);
      
      // 3. Verify the generated output 
      await expect(output).toHaveText(scenario.expected);
    });
  }

  // --- UI TEST SCENARIO (1) ---
  test('Pos_UI_001: Sinhala output updates automatically in real-time', async ({ page }) => {
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';
    const outputSelector = 'div.bg-slate-50';
    const inputText = 'man gedhara yanavaa';

    // Type slowly to verify real-time update [cite: 372, 392]
    await page.type(inputSelector, inputText, { delay: 100 });

    const output = page.locator(outputSelector);
    await expect(output).toHaveText(/මන් ගෙදර යනවා/);
  });
});
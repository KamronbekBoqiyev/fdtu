// DOM elementlarini tanlaymiz
const copyBtn = document.getElementById("copyBtn");   // 📋 tugma
const codeBlock = document.getElementById("codeBlock"); // <code> ichidagi kod

// Tugma bosilganda bajariladigan hodisa
copyBtn.addEventListener("click", () => {
  // Kod matnini olish (faqat matn sifatida)
  const code = codeBlock.textContent;

  // Kodni clipboard'ga yozish
  navigator.clipboard.writeText(code)
    .then(() => {
      // Agar muvaffaqiyatli bo‘lsa — foydalanuvchiga habar chiqadi
      copyBtn.textContent = "✅ Nusxalandi!";
      
      // 2 soniyadan keyin yana avvalgi holatiga qaytadi
      setTimeout(() => {
        copyBtn.textContent = "📋 Nusxalash";
      }, 2000);
    })
    .catch(() => {
      // Agar xatolik bo‘lsa
      copyBtn.textContent = "❌ Xatolik!";
      setTimeout(() => {
        copyBtn.textContent = "📋 Nusxalash";
      }, 2000);
    });
});

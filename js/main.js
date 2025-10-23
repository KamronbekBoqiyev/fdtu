// DOM elementlarini tanlaymiz
const copyBtn = document.getElementById("copyBtn");   // 📋 tugma
const copyBtnn = document.getElementById("copyBtnn");   // 📋 tugma
const copyBtnnn = document.getElementById("copyBtnnn");   // 📋 tugma
const copyBtnnnn = document.getElementById("copyBtnnnn");   // 📋 tugma


const codeBlock = document.getElementById("codeBlock"); // <code> ichidagi kod
const codeBlockk = document.getElementById("codeBlockk"); // <code> ichidagi kod
const codeBlockkk = document.getElementById("codeBlockkk"); // <code> ichidagi kod
const codeBlockkkk = document.getElementById("codeBlockkkk"); // <code> ichidagi kod

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



// Tugma bosilganda bajariladigan hodisa
copyBtnn.addEventListener("click", () => {
  // Kod matnini olish (faqat matn sifatida)
  const code = codeBlockk.textContent;

  // Kodni clipboard'ga yozish
  navigator.clipboard.writeText(code)
    .then(() => {
      // Agar muvaffaqiyatli bo‘lsa — foydalanuvchiga habar chiqadi
      copyBtnn.textContent = "✅ Nusxalandi!";
      
      // 2 soniyadan keyin yana avvalgi holatiga qaytadi
      setTimeout(() => {
        copyBtnn.textContent = "📋 Nusxalash";
      }, 2000);
    })
    .catch(() => {
      // Agar xatolik bo‘lsa
      copyBtnn.textContent = "❌ Xatolik!";
      setTimeout(() => {
        copyBtnn.textContent = "📋 Nusxalash";
      }, 2000);
    });
});



// Tugma bosilganda bajariladigan hodisa
copyBtnnn.addEventListener("click", () => {
  // Kod matnini olish (faqat matn sifatida)
  const code = codeBlockkk.textContent;

  // Kodni clipboard'ga yozish
  navigator.clipboard.writeText(code)
    .then(() => {
      // Agar muvaffaqiyatli bo‘lsa — foydalanuvchiga habar chiqadi
      copyBtnnn.textContent = "✅ Nusxalandi!";
      
      // 2 soniyadan keyin yana avvalgi holatiga qaytadi
      setTimeout(() => {
        copyBtnnn.textContent = "📋 Nusxalash";
      }, 2000);
    })
    .catch(() => {
      // Agar xatolik bo‘lsa
      copyBtnnn.textContent = "❌ Xatolik!";
      setTimeout(() => {
        copyBtnnn.textContent = "📋 Nusxalash";
      }, 2000);
    });
});




// Tugma bosilganda bajariladigan hodisa
copyBtnnnn.addEventListener("click", () => {
  // Kod matnini olish (faqat matn sifatida)
  const code = codeBlockkkk.textContent;

  // Kodni clipboard'ga yozish
  navigator.clipboard.writeText(code)
    .then(() => {
      // Agar muvaffaqiyatli bo‘lsa — foydalanuvchiga habar chiqadi
      copyBtnnnn.textContent = "✅ Nusxalandi!";
      
      // 2 soniyadan keyin yana avvalgi holatiga qaytadi
      setTimeout(() => {
        copyBtnnnn.textContent = "📋 Nusxalash";
      }, 2000);
    })
    .catch(() => {
      // Agar xatolik bo‘lsa
      copyBtnnnn.textContent = "❌ Xatolik!";
      setTimeout(() => {
        copyBtnnnn.textContent = "📋 Nusxalash";
      }, 2000);
    });
});
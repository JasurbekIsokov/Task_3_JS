//  Exercise - 3

// Topshiriq: Parol va Login ni tekshiradigan dastur tuzish. Prompt bilan userdan kelayotgan malumotni o’qiysiz. Admin va oddiy user ni oynalarni. Shularni tugri yunaltiradigan dastur tuzish kerak. Birinchi Login ni kiritishini suraysiz. Agar User “admin” logini kiritsa undan admin parolni so’raysiz. User oddiy “user” logini kiritsa undan “user” ni parolini so’raysiz.

// Masalan:

// 1. Kiruvchi malumot: Logini kiriting: “User”. User parolini kiriting: “user”.

//     Chiquvchi malumot: Tabriklaymiz siz tizimga oddiy user bulib kiridingiz.

// 2. Kiruvchi malumot: Logini kiriting: “Admin”. Admin parolini kiriting: “Admin”.

//     Chiquvchi malumot: Tabriklaymiz siz tizimga admin bulib kiridingiz.

let login = prompt("Logonni kiriting");
if (login == "user") {
  prompt("User parolini kiriting");
  console.log(`Tabriklaymiz siz tizimga oddiy user bo'lib kirdingiz`);
} else if (login == "admin") {
  prompt("Admin parolini kiriting");
  console.log(`Tabriklaymiz siz tizimga admin bo'lib kirdingiz`);
} else console.log(`Siz mavjud bolmagan loginni kiritdingiz`);

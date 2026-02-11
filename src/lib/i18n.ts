export type Locale = "en" | "zh"

const translations = {
  en: {
    title1: "US Address",
    title2: "Generator",
    subtitle: "Generate realistic US addresses and identity information instantly",
    allStates: "All States (Random)",
    generate: "Generate",
    copyAll: "Copy All",
    copied: "Copied",

    personalInfo: "Personal Information",
    fullName: "Full Name",
    dateOfBirth: "Date of Birth",
    ssn: "SSN",

    address: "Address",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "ZIP Code",
    county: "County",

    contact: "Contact",
    phone: "Phone",
    email: "Email",

    creditCard: "Credit Card",
    cardNumber: "Card Number",
    cvv: "CVV",
    expires: "Expires",

    employment: "Employment",
    occupation: "Occupation",
    company: "Company",
    monthlySalary: "Monthly Salary",

    accountMore: "Account & More",
    username: "Username",
    password: "Password",
    height: "Height",
    weight: "Weight",
    bloodType: "Blood Type",
    education: "Education",

    disclaimer: "All data is randomly generated and does not correspond to real individuals.",
  },
  zh: {
    title1: "美国地址",
    title2: "生成器",
    subtitle: "即时生成真实可用的美国地址与身份信息",
    allStates: "所有州（随机）",
    generate: "生成",
    copyAll: "复制全部",
    copied: "已复制",

    personalInfo: "个人信息",
    fullName: "姓名",
    dateOfBirth: "出生日期",
    ssn: "社会安全号",

    address: "地址",
    street: "街道",
    city: "城市",
    state: "州",
    zipCode: "邮编",
    county: "县/郡",

    contact: "联系方式",
    phone: "电话",
    email: "邮箱",

    creditCard: "信用卡",
    cardNumber: "卡号",
    cvv: "CVV",
    expires: "过期时间",

    employment: "就业信息",
    occupation: "职业",
    company: "公司",
    monthlySalary: "月薪",

    accountMore: "账号与其他",
    username: "用户名",
    password: "密码",
    height: "身高",
    weight: "体重",
    bloodType: "血型",
    education: "学历",

    disclaimer: "所有数据均为随机生成，不对应任何真实个人。",
  },
} as const

export type TranslationKey = keyof typeof translations.en

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key]
}

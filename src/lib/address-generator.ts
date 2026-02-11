export interface GeneratedAddress {
  firstName: string
  lastName: string
  gender: string
  dateOfBirth: string
  ssn: string

  street: string
  city: string
  state: string
  stateAbbr: string
  zipCode: string
  county: string

  phone: string
  email: string

  creditCardType: string
  creditCardNumber: string
  cvv: string
  expirationDate: string
  occupation: string
  company: string
  employmentStatus: string
  monthlySalary: string

  username: string
  password: string
  height: string
  weight: string
  bloodType: string
  education: string
  guid: string
}

interface StateAreaCodes {
  [stateAbbr: string]: number[]
}

const STATE_AREA_CODES: StateAreaCodes = {
  AL: [205, 251, 256, 334, 938], AK: [907], AZ: [480, 520, 602, 623, 928], AR: [479, 501, 870],
  CA: [209, 213, 310, 323, 408, 415, 510, 530, 559, 619, 626, 650, 661, 707, 714, 747, 760, 805, 818, 831, 858, 909, 916, 925, 949, 951],
  CO: [303, 719, 720, 970], CT: [203, 475, 860, 959], DE: [302],
  FL: [239, 305, 321, 352, 386, 407, 561, 727, 754, 772, 786, 813, 850, 863, 904, 941, 954],
  GA: [229, 404, 470, 478, 678, 706, 762, 770, 912], HI: [808], ID: [208, 986],
  IL: [217, 224, 309, 312, 331, 618, 630, 708, 773, 779, 815, 847, 872],
  IN: [219, 260, 317, 463, 574, 765, 812, 930], IA: [319, 515, 563, 641, 712],
  KS: [316, 620, 785, 913], KY: [270, 364, 502, 606, 859], LA: [225, 318, 337, 504, 985],
  ME: [207], MD: [240, 301, 410, 443, 667], MA: [339, 351, 413, 508, 617, 774, 781, 857, 978],
  MI: [231, 248, 269, 313, 517, 586, 616, 734, 810, 906, 947, 989],
  MN: [218, 320, 507, 612, 651, 763, 952], MS: [228, 601, 662, 769],
  MO: [314, 417, 573, 636, 660, 816], MT: [406], NE: [308, 402, 531], NV: [702, 725, 775],
  NH: [603], NJ: [201, 551, 609, 732, 848, 856, 862, 908, 973], NM: [505, 575],
  NY: [212, 315, 332, 347, 516, 518, 585, 607, 631, 646, 716, 718, 838, 845, 914, 917, 929, 934],
  NC: [252, 336, 704, 743, 828, 910, 919, 980, 984], ND: [701],
  OH: [216, 220, 234, 283, 330, 380, 419, 440, 513, 567, 614, 740, 937],
  OK: [405, 539, 580, 918], OR: [458, 503, 541, 971],
  PA: [215, 223, 267, 272, 412, 445, 484, 570, 610, 717, 724, 814, 878], RI: [401],
  SC: [803, 843, 854, 864], SD: [605], TN: [423, 615, 629, 731, 865, 901, 931],
  TX: [210, 214, 254, 281, 325, 346, 361, 409, 430, 432, 469, 512, 682, 713, 726, 737, 806, 817, 830, 832, 903, 915, 936, 940, 956, 972, 979],
  UT: [385, 435, 801], VT: [802], VA: [276, 434, 540, 571, 703, 757, 804],
  WA: [206, 253, 360, 425, 509, 564], WV: [304, 681], WI: [262, 414, 534, 608, 715, 920], WY: [307],
}

import { REAL_ADDRESSES, type RealAddress } from "./real-addresses"

export type { RealAddress }

export const US_STATES = [...new Set(REAL_ADDRESSES.map((a) => a.stateAbbr))].sort().map((abbr) => {
  const sample = REAL_ADDRESSES.find((a) => a.stateAbbr === abbr)!
  return { name: sample.state, abbr }
})

const FIRST_NAMES_MALE = ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas", "Christopher", "Charles", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Andrew", "Paul", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Edward", "Jason", "Jeffrey", "Ryan", "Jacob", "Nicholas", "Gary", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon"]
const FIRST_NAMES_FEMALE = ["Mary", "Patricia", "Jennifer", "Linda", "Barbara", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen", "Lisa", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna", "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia", "Kathleen", "Amy", "Angela", "Shirley", "Anna", "Brenda", "Pamela", "Emma", "Nicole", "Helen"]
const LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"]

const OCCUPATIONS = ["Software Engineer", "Registered Nurse", "Teacher", "Accountant", "Marketing Manager", "Sales Representative", "Graphic Designer", "Project Manager", "Data Analyst", "Mechanical Engineer", "Financial Advisor", "Human Resources Manager", "Pharmacist", "Civil Engineer", "Dentist", "Attorney", "Architect", "Physical Therapist", "Electrician", "Chef", "Veterinarian", "Social Worker", "Real Estate Agent", "Journalist", "Physician", "Web Developer", "Consultant", "Operations Manager", "Research Scientist", "Paramedic"]

const COMPANY_PREFIXES = ["American", "National", "Global", "Pacific", "Atlantic", "Summit", "Pinnacle", "Premier", "Liberty", "Eagle", "Horizon", "Crest", "Sterling", "Apex", "United", "First", "Golden", "Silver", "Blue", "Green"]
const COMPANY_SUFFIXES = ["Solutions", "Technologies", "Industries", "Enterprises", "Group", "Services", "Systems", "Consulting", "Holdings", "Partners", "Corp", "Inc", "Associates", "Labs", "Dynamics", "Networks", "Ventures", "Capital", "Works", "Digital"]

const EMPLOYMENT_STATUSES = ["Full-time", "Part-time", "Contract", "Self-employed"]
const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
const EDUCATIONS = ["High School Diploma", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctorate", "Professional Degree"]

const EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "protonmail.com", "aol.com", "mail.com"]

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateSSN(): string {
  let area = rand(1, 899)
  if (area === 666) area = 667
  const group = rand(1, 99)
  const serial = rand(1, 9999)
  return `${String(area).padStart(3, "0")}-${String(group).padStart(2, "0")}-${String(serial).padStart(4, "0")}`
}

function generateCreditCard(): { type: string; number: string; cvv: string; exp: string } {
  const types = [
    { name: "Visa", prefix: "4", length: 16 },
    { name: "MasterCard", prefix: String(rand(51, 55)), length: 16 },
    { name: "American Express", prefix: Math.random() > 0.5 ? "34" : "37", length: 15 },
    { name: "Discover", prefix: "6011", length: 16 },
  ]
  const card = pick(types)

  let num = card.prefix
  while (num.length < card.length - 1) {
    num += String(rand(0, 9))
  }

  let sum = 0
  let alt = true
  for (let i = num.length - 1; i >= 0; i--) {
    let n = parseInt(num[i], 10)
    if (alt) {
      n *= 2
      if (n > 9) n -= 9
    }
    sum += n
    alt = !alt
  }
  const checkDigit = (10 - (sum % 10)) % 10
  num += String(checkDigit)

  const cvvLength = card.name === "American Express" ? 4 : 3
  let cvv = ""
  for (let i = 0; i < cvvLength; i++) cvv += String(rand(0, 9))

  const now = new Date()
  const expYear = now.getFullYear() + rand(1, 5)
  const expMonth = rand(1, 12)
  const exp = `${String(expMonth).padStart(2, "0")}/${expYear}`

  return { type: card.name, number: num, cvv, exp }
}

function generatePassword(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
  let pw = ""
  for (let i = 0; i < rand(12, 18); i++) {
    pw += chars[Math.floor(Math.random() * chars.length)]
  }
  return pw
}

function generateGUID(): string {
  const hex = "0123456789abcdef"
  const seg = (len: number) => {
    let s = ""
    for (let i = 0; i < len; i++) s += hex[Math.floor(Math.random() * 16)]
    return s
  }
  return `${seg(8)}-${seg(4)}-4${seg(3)}-${hex[8 + Math.floor(Math.random() * 4)]}${seg(3)}-${seg(12)}`
}

export function generateAddress(stateAbbr?: string): GeneratedAddress {
  const candidates = stateAbbr
    ? REAL_ADDRESSES.filter((a) => a.stateAbbr === stateAbbr)
    : REAL_ADDRESSES
  const addr = pick(candidates.length > 0 ? candidates : REAL_ADDRESSES)

  const gender = Math.random() > 0.5 ? "Male" : "Female"
  const firstName = gender === "Male" ? pick(FIRST_NAMES_MALE) : pick(FIRST_NAMES_FEMALE)
  const lastName = pick(LAST_NAMES)

  const birthYear = rand(1950, 2003)
  const birthMonth = rand(1, 12)
  const birthDay = rand(1, 28)
  const dateOfBirth = `${String(birthMonth).padStart(2, "0")}/${String(birthDay).padStart(2, "0")}/${birthYear}`

  const areaCodes = STATE_AREA_CODES[addr.stateAbbr] ?? [212]
  const areaCode = pick(areaCodes)
  const phone = `(${areaCode}) ${rand(200, 999)}-${String(rand(0, 9999)).padStart(4, "0")}`

  const emailUser = `${firstName.toLowerCase()}${lastName.toLowerCase()}${rand(1, 999)}`
  const email = `${emailUser}@${pick(EMAIL_DOMAINS)}`

  const cc = generateCreditCard()

  const company = `${pick(COMPANY_PREFIXES)} ${pick(COMPANY_SUFFIXES)}`
  const salary = rand(3, 15) * 1000
  const monthlySalary = `$${salary.toLocaleString()}`

  const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}${rand(10, 999)}`

  const feet = rand(5, 6)
  const inches = rand(0, 11)
  const height = `${feet}'${inches}"`
  const weight = `${rand(110, 250)} lbs`

  return {
    firstName,
    lastName,
    gender,
    dateOfBirth,
    ssn: generateSSN(),
    street: addr.street,
    city: addr.city,
    state: addr.state,
    stateAbbr: addr.stateAbbr,
    zipCode: addr.zipCode,
    county: addr.county,
    phone,
    email,
    creditCardType: cc.type,
    creditCardNumber: cc.number,
    cvv: cc.cvv,
    expirationDate: cc.exp,
    occupation: pick(OCCUPATIONS),
    company,
    employmentStatus: pick(EMPLOYMENT_STATUSES),
    monthlySalary,
    username,
    password: generatePassword(),
    height,
    weight,
    bloodType: pick(BLOOD_TYPES),
    education: pick(EDUCATIONS),
    guid: generateGUID(),
  }
}

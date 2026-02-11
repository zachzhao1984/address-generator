import { useState, useCallback } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowsClockwise,
  Copy,
  Check,
  MapPin,
  User,
  Phone,
  CreditCard,
  Briefcase,
  IdentificationBadge,
  Translate,
} from "@phosphor-icons/react"
import {
  generateAddress,
  US_STATES,
  type GeneratedAddress,
} from "@/lib/address-generator"
import { t, type Locale } from "@/lib/i18n"

const NUNITO = { fontFamily: "Nunito, sans-serif" }

function FieldRow({
  label,
  value,
  copiedField,
  onCopy,
}: {
  label: string
  value: string
  copiedField: string | null
  onCopy: (field: string, value: string) => void
}) {
  const isCopied = copiedField === label
  return (
    <div className="group/row flex items-center justify-between gap-4 rounded-[12px] px-4 py-2.5 transition-all duration-200 hover:bg-white/50">
      <span className="text-clay-muted text-xs font-bold uppercase tracking-wider shrink-0 w-28 sm:w-32" style={NUNITO}>
        {label}
      </span>
      <span className="text-sm font-medium flex-1 text-right truncate text-clay-foreground">
        {value}
      </span>
      <button
        onClick={() => onCopy(label, value)}
        className="shrink-0 opacity-0 group-hover/row:opacity-100 transition-all duration-200 text-clay-muted hover:text-clay-accent cursor-pointer hover:scale-110 active:scale-90"
      >
        {isCopied ? (
          <Check size={15} weight="bold" className="text-clay-emerald" />
        ) : (
          <Copy size={15} weight="bold" />
        )}
      </button>
    </div>
  )
}

function ClayCard({
  icon,
  iconGradient,
  title,
  badge,
  children,
}: {
  icon: React.ReactNode
  iconGradient: string
  title: string
  badge?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-white/65 backdrop-blur-xl p-6 sm:p-8 shadow-clay-card transition-all duration-500 hover:-translate-y-2 hover:shadow-clay-card-hover">
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl p-2.5 bg-gradient-to-br ${iconGradient} text-white shadow-clay-button`}>
              {icon}
            </div>
            <h2 className="text-lg font-extrabold text-clay-foreground tracking-tight" style={NUNITO}>
              {title}
            </h2>
          </div>
          {badge}
        </div>
        <div className="space-y-0.5">
          {children}
        </div>
      </div>
    </div>
  )
}

function ClayBadge({ children, variant = "solid" }: { children: React.ReactNode; variant?: "solid" | "outline" }) {
  if (variant === "outline") {
    return (
      <span
        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide border-2 border-clay-accent/20 text-clay-accent bg-clay-accent/5"
        style={NUNITO}
      >
        {children}
      </span>
    )
  }
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide bg-gradient-to-br from-clay-accent-light/20 to-clay-accent/10 text-clay-accent"
      style={NUNITO}
    >
      {children}
    </span>
  )
}

function ClaySeparator() {
  return <div className="mx-4 my-2 h-px bg-gradient-to-r from-transparent via-clay-accent/10 to-transparent" />
}

function LangToggle({ locale, onChange }: { locale: Locale; onChange: (l: Locale) => void }) {
  const next = locale === "en" ? "zh" : "en"
  const label = locale === "en" ? "中文" : "EN"
  return (
    <button
      onClick={() => onChange(next)}
      className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-white/70 text-clay-foreground text-sm font-bold tracking-wide shadow-clay-select transition-all duration-200 hover:-translate-y-0.5 hover:shadow-clay-card active:scale-[0.92] active:shadow-clay-pressed cursor-pointer backdrop-blur-sm"
      style={NUNITO}
    >
      <Translate size={16} weight="bold" className="text-clay-accent" />
      {label}
    </button>
  )
}

export function AddressCard() {
  const [address, setAddress] = useState<GeneratedAddress>(() => generateAddress())
  const [selectedState, setSelectedState] = useState<string>("")
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [locale, setLocale] = useState<Locale>("en")

  const regenerate = useCallback(() => {
    setAddress(generateAddress(selectedState || undefined))
  }, [selectedState])

  const copyField = useCallback((field: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    })
  }, [])

  const copyAll = useCallback(() => {
    const lines = [
      `${address.firstName} ${address.lastName}`,
      address.street,
      `${address.city}, ${address.stateAbbr} ${address.zipCode}`,
      `Phone: ${address.phone}`,
      `Email: ${address.email}`,
      `SSN: ${address.ssn}`,
      `DOB: ${address.dateOfBirth}`,
    ]
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopiedField("__all__")
      setTimeout(() => setCopiedField(null), 2000)
    })
  }, [address])

  return (
    <div className="relative min-h-screen overflow-hidden bg-clay-canvas py-8 px-4 sm:py-16">
      {/* Floating 3D Blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] h-[60vh] w-[60vh] rounded-full bg-[#8B5CF6]/10 blur-3xl animate-clay-float" />
        <div className="absolute -right-[10%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-[#EC4899]/10 blur-3xl animate-clay-float-delayed animation-delay-2000" />
        <div className="absolute -bottom-[5%] left-[20%] h-[55vh] w-[55vh] rounded-full bg-[#0EA5E9]/10 blur-3xl animate-clay-float-slow animation-delay-4000" />
        <div className="absolute top-[60%] -right-[5%] h-[40vh] w-[40vh] rounded-full bg-[#F59E0B]/8 blur-3xl animate-clay-float animation-delay-4000" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Lang Toggle */}
        <div className="flex justify-end mb-4">
          <LangToggle locale={locale} onChange={setLocale} />
        </div>

        {/* Hero Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="rounded-[20px] bg-gradient-to-br from-clay-accent-light to-clay-accent p-3.5 text-white shadow-clay-button animate-clay-breathe">
              <MapPin size={28} weight="duotone" />
            </div>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] text-clay-foreground mb-3"
            style={NUNITO}
          >
            <span className="bg-gradient-to-r from-clay-foreground via-clay-accent to-clay-accent-alt bg-clip-text text-transparent">
              {t(locale, "title1")}
            </span>
            <br />
            {t(locale, "title2")}
          </h1>
          <p className="text-clay-muted text-base sm:text-lg font-medium leading-relaxed max-w-md mx-auto">
            {t(locale, "subtitle")}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          <div className="flex-1">
            <Select
              value={selectedState}
              onValueChange={(val) => setSelectedState(val as string)}
            >
              <SelectTrigger className="w-full h-14 rounded-[20px] border-0 bg-[#EFEBF5] px-5 text-base font-medium shadow-clay-pressed transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-clay-accent/20 [&_svg]:text-clay-muted">
                <SelectValue placeholder={t(locale, "allStates")} />
              </SelectTrigger>
              <SelectContent className="rounded-[20px] shadow-clay-card border-0 bg-white/90 backdrop-blur-xl">
                <SelectItem value="">{t(locale, "allStates")}</SelectItem>
                {US_STATES.map((s) => (
                  <SelectItem key={s.abbr} value={s.abbr}>
                    {s.name} ({s.abbr})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <button
              onClick={regenerate}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 h-14 px-7 rounded-[20px] bg-gradient-to-br from-clay-accent-light to-clay-accent text-white font-bold tracking-wide shadow-clay-button transition-all duration-200 hover:-translate-y-1 hover:shadow-clay-button-hover active:scale-[0.92] active:shadow-clay-pressed cursor-pointer"
              style={NUNITO}
            >
              <ArrowsClockwise size={18} weight="bold" />
              {t(locale, "generate")}
            </button>
            <button
              onClick={copyAll}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 h-14 px-6 rounded-[20px] bg-white text-clay-foreground font-bold tracking-wide shadow-clay-card transition-all duration-200 hover:-translate-y-1 hover:shadow-clay-card-hover active:scale-[0.92] active:shadow-clay-pressed cursor-pointer"
              style={NUNITO}
            >
              {copiedField === "__all__" ? (
                <>
                  <Check size={18} weight="bold" className="text-clay-emerald" />
                  {t(locale, "copied")}
                </>
              ) : (
                <>
                  <Copy size={18} weight="bold" />
                  {t(locale, "copyAll")}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5">
          <ClayCard
            icon={<User size={20} weight="duotone" />}
            iconGradient="from-purple-400 to-purple-600"
            title={t(locale, "personalInfo")}
            badge={<ClayBadge>{address.gender}</ClayBadge>}
          >
            <FieldRow label={t(locale, "fullName")} value={`${address.firstName} ${address.lastName}`} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "dateOfBirth")} value={address.dateOfBirth} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "ssn")} value={address.ssn} copiedField={copiedField} onCopy={copyField} />
          </ClayCard>

          <ClayCard
            icon={<MapPin size={20} weight="duotone" />}
            iconGradient="from-blue-400 to-blue-600"
            title={t(locale, "address")}
            badge={<ClayBadge variant="outline">{address.stateAbbr}</ClayBadge>}
          >
            <FieldRow label={t(locale, "street")} value={address.street} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "city")} value={address.city} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "state")} value={`${address.state} (${address.stateAbbr})`} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "zipCode")} value={address.zipCode} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "county")} value={address.county} copiedField={copiedField} onCopy={copyField} />
          </ClayCard>

          <ClayCard
            icon={<Phone size={20} weight="duotone" />}
            iconGradient="from-cyan-400 to-cyan-600"
            title={t(locale, "contact")}
          >
            <FieldRow label={t(locale, "phone")} value={address.phone} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "email")} value={address.email} copiedField={copiedField} onCopy={copyField} />
          </ClayCard>

          <ClayCard
            icon={<CreditCard size={20} weight="duotone" />}
            iconGradient="from-pink-400 to-pink-600"
            title={t(locale, "creditCard")}
            badge={<ClayBadge>{address.creditCardType}</ClayBadge>}
          >
            <FieldRow label={t(locale, "cardNumber")} value={address.creditCardNumber} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "cvv")} value={address.cvv} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "expires")} value={address.expirationDate} copiedField={copiedField} onCopy={copyField} />
          </ClayCard>

          <ClayCard
            icon={<Briefcase size={20} weight="duotone" />}
            iconGradient="from-amber-400 to-amber-600"
            title={t(locale, "employment")}
            badge={<ClayBadge variant="outline">{address.employmentStatus}</ClayBadge>}
          >
            <FieldRow label={t(locale, "occupation")} value={address.occupation} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "company")} value={address.company} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "monthlySalary")} value={address.monthlySalary} copiedField={copiedField} onCopy={copyField} />
          </ClayCard>

          <ClayCard
            icon={<IdentificationBadge size={20} weight="duotone" />}
            iconGradient="from-emerald-400 to-emerald-600"
            title={t(locale, "accountMore")}
          >
            <FieldRow label={t(locale, "username")} value={address.username} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "password")} value={address.password} copiedField={copiedField} onCopy={copyField} />
            <ClaySeparator />
            <FieldRow label={t(locale, "height")} value={address.height} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "weight")} value={address.weight} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "bloodType")} value={address.bloodType} copiedField={copiedField} onCopy={copyField} />
            <FieldRow label={t(locale, "education")} value={address.education} copiedField={copiedField} onCopy={copyField} />
            <ClaySeparator />
            <FieldRow label="GUID" value={address.guid} copiedField={copiedField} onCopy={copyField} />
          </ClayCard>
        </div>

        <p className="mt-10 text-center text-sm text-clay-muted font-medium" style={NUNITO}>
          {t(locale, "disclaimer")}
        </p>
      </div>
    </div>
  )
}

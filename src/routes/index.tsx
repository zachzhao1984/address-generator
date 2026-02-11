import { createFileRoute } from "@tanstack/react-router"
import { AddressCard } from "@/components/address-card"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return <AddressCard />
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return(
    <div className="">
       <Button variant="primary" size="default">Primary</Button>
       <Button variant="destructive">destructive</Button>
       <Button variant="ghost">ghost</Button>
       <Button variant="link">link</Button>
       <Button variant="outline">outline</Button>
       <Button variant="secondary">secondary</Button>
       <Button variant="muted">muted</Button>
       <Button variant="tertiary">tertiary</Button>
       <Input></Input>
    </div>
  )
}
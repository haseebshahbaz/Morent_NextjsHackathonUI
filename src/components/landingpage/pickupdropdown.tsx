import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PickupDropdownProps {
  label: string
  placeholder: string
  options: string[]
}

export function PickupDropdown({ label, placeholder, options }: PickupDropdownProps) {
  return (
    <div className="w-full">
      <label className="text-[16px] text-[#1A202C] font-semibold mb-2 block">
        {label}
      </label>
      <Select>
        <SelectTrigger className="w-full h-[48px] rounded-[10px] border-[#C3D4E966]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

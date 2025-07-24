import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Dispatch } from 'react'
import NavList from './nav-list'

const MobileNavigation = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu className="block md:hidden cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent side="bottom" className="px-2">
        <SheetHeader className="text-left -mt-4">
          <SheetTitle>CarinsuranceDxb</SheetTitle>
          <SheetDescription className="italic !mt-1">
            Your Destination for Comprehensive Insurance in Dubai
          </SheetDescription>
        </SheetHeader>

        <div className=" h-full flex flex-col justify-between">
          <div className="mt-4">
            <NavList setIsOpen={setIsOpen} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation

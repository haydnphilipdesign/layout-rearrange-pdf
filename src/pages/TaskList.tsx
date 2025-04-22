
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const TaskList = () => {
  return (
    <div className="max-w-[8.5in] min-h-[11in] mx-auto bg-white p-4 text-[0.65rem] print:shadow-none flex flex-col">
      {/* Documentation Checklist - Copied from Quick Reference */}
      <div className="mb-1">
        <div className="bg-yellow-50 font-semibold px-2 py-0.5 border-t-2 border-x-2 border-gray-800">DOCUMENTATION CHECKLIST</div>
        <div className="grid grid-cols-8 gap-1 p-2 border-2 border-t-0 border-gray-800">
          {['AOS', 'DEED', 'DUAL', 'WIRE', 'CHECK', 'KPSS', 'SPD', 'RLBPHN', 'BEC', 'PREQUAL', 'FYP', 'BAC', 'SEC', 'DMN', 'CBC', 'HW', 'CN'].map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              <input type="checkbox" className="h-3 w-3 border-gray-800" />
              <span className="text-[0.65rem]">{item}</span>
            </div>
          ))}
          <div className="col-span-3 border-t border-gray-300 mt-1 pt-1">
            <div className="font-semibold mb-1 text-[0.65rem]">KW ASA Signatures:</div>
            <div className="grid grid-cols-3 gap-1">
              <div className="flex items-center gap-1">
                <input type="checkbox" className="h-3 w-3 border-gray-800" />
                <span className="text-[0.65rem]">BUYER</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="h-3 w-3 border-gray-800" />
                <span className="text-[0.65rem]">SELLER</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="h-3 w-3 border-gray-800" />
                <span className="text-[0.65rem]">AGENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="flex-grow flex flex-col gap-1">
        <div className="bg-blue-50 font-semibold px-2 py-0.5 border-t-2 border-x-2 border-gray-800">TRANSACTION TASK LIST</div>
        <div className="border-2 border-t-0 border-gray-800 p-2 flex-grow grid grid-cols-2 gap-x-2 gap-y-1 overflow-hidden">
          {/* Left Column */}
          <div className="flex flex-col gap-1">
            {/* 1. Command */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">1. COMMAND</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="File Started" />
                <ChecklistItem label="File Submitted" />
                <ChecklistItem label="File Approved" />
                <ChecklistItem label="Commission Submitted" />
              </div>
            </div>

            {/* 2. File Preparation */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">2. FILE PREPARATION</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Added to Pending Checklist" />
                <ChecklistItem label="Added to Calendar" />
                <ChecklistItem label="Tasks Set Up" />
                <ChecklistItem label="Pended MLS" />
                <ChecklistItem label="Added to ShowingTime" />
              </div>
            </div>

            {/* 3. Introduction */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">3. INTRODUCTION</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Sent to Client" />
                <ChecklistItem label="Sent to Agent" />
                <ChecklistItem label="Sent to Attorney" />
                <ChecklistItem label="Sent to Lender" />
              </div>
            </div>

            {/* 4. Deposit */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">4. DEPOSIT</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Follow Up Sent to Buyer" />
                <ChecklistItem label="First Deposit Received" />
                <ChecklistItem label="Second Deposit Received" />
              </div>
            </div>

            {/* 5. Mortgage Application */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">5. MORTGAGE APPLICATION & APPRAISAL ORDER</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Follow Up with Buyer's Agent" />
              </div>
            </div>

            {/* 6. Title Work */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">6. TITLE WORK</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Title Work Ordered" />
                <ChecklistItem label="Seller's Info Sent to Title Company" />
                <ChecklistItem label="TC Invoice Sent to Title Company" />
              </div>
            </div>

            {/* 7. Right of First Refusal */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">7. RIGHT OF FIRST REFUSAL</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Requested" />
                <ChecklistItem label="Received" />
              </div>
            </div>

            {/* 8. Home Inspection */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">8. HOME INSPECTION SCHEDULED</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="House/Septic Ready" />
                <ChecklistItem label="Gate Pass" />
                <div className="pl-3 flex flex-col gap-0.5">
                  <div className="font-medium text-[0.6rem]">Inspection Reports:</div>
                  <ChecklistItem label="Received" className="pl-3" />
                  <ChecklistItem label="Sent to Client" className="pl-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-1">
            {/* 9. BRTI */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">9. BRTI</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Prepared/Received" />
                <ChecklistItem label="Sent to Seller" />
              </div>
            </div>

            {/* 10. CIT Addendum */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">10. CIT ADDENDUM</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Prepared" />
                <ChecklistItem label="Sent" />
                <ChecklistItem label="Signed" />
              </div>
            </div>

            {/* 11. Order Resale Certificate */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">11. ORDER RESALE CERTIFICATE</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <div className="flex items-center gap-1">
                  <Checkbox id="11-order" className="h-3 w-3 border-gray-800 rounded-none" />
                  <Label htmlFor="11-order" className="text-[0.65rem]">Date: <span className="border-b border-gray-300 inline-block w-20"></span></Label>
                </div>
                <div className="pl-2">
                  <div className="flex items-center gap-1">
                    <Checkbox id="11a" className="h-3 w-3 border-gray-800 rounded-none" />
                    <Label htmlFor="11a" className="text-[0.65rem]">Requested Payment from Seller: <span className="border-b border-gray-300 inline-block w-10"></span></Label>
                  </div>
                  <div className="pl-4">
                    <ChecklistItem label="Seller Paid: _________________" />
                  </div>
                </div>
                <ChecklistItem label="Resale Cert Received" />
                <div className="pl-4 flex flex-col gap-0.5">
                  <ChecklistItem label="Copy Sent to Buyer" />
                  <ChecklistItem label="Copy Sent to Seller" />
                  <ChecklistItem label="Copy Sent to Title Company" />
                </div>
                <div className="pl-2">
                  <div className="text-[0.65rem] font-medium">Receipt of Documents:</div>
                  <div className="pl-2 flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                      <Checkbox id="11c-i" className="h-3 w-3 border-gray-800 rounded-none" />
                      <Label htmlFor="11c-i" className="text-[0.65rem]">Sent to Buyer: <span className="border-b border-gray-300 inline-block w-20"></span></Label>
                    </div>
                    <ChecklistItem label="Fully Signed" />
                  </div>
                </div>
              </div>
            </div>

            {/* 11b. Additional Information */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-green-50 font-semibold px-2 py-0.5 border-b border-gray-300">11b. ADDITIONAL INFORMATION</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <div className="text-[0.65rem]">Name: <span className="border-b border-gray-300 inline-block w-32"></span></div>
                <div className="text-[0.65rem]">Phone: <span className="border-b border-gray-300 inline-block w-32"></span></div>
                <div className="text-[0.65rem]">Email: <span className="border-b border-gray-300 inline-block w-32"></span></div>
                <div className="text-[0.65rem]">Resale Cert Expiration: <span className="border-b border-gray-300 inline-block w-24"></span></div>
                <div className="text-[0.65rem]">Cost: <span className="border-b border-gray-300 inline-block w-32"></span></div>
              </div>
            </div>

            {/* 12. Certificate of Occupancy */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">12. CERTIFICATE OF OCCUPANCY</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <ChecklistItem label="Request Payment" />
                <ChecklistItem label="Seller Paid" />
                <ChecklistItem label="Inspection Set" />
                <ChecklistItem label="C/O Received" />
                <ChecklistItem label="Sent Copy to Buyer" />
              </div>
            </div>

            {/* 12b. Additional Information */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-green-50 font-semibold px-2 py-0.5 border-b border-gray-300">12b. ADDITIONAL INFORMATION</div>
              <div className="p-1 grid grid-cols-1 gap-0.5">
                <div className="text-[0.65rem]">Township: <span className="border-b border-gray-300 inline-block w-32"></span></div>
                <div className="text-[0.65rem]">Phone: <span className="border-b border-gray-300 inline-block w-32"></span></div>
                <div className="text-[0.65rem]">Email: <span className="border-b border-gray-300 inline-block w-32"></span></div>
                <div className="text-[0.65rem]">Cost: <span className="border-b border-gray-300 inline-block w-32"></span></div>
              </div>
            </div>

            {/* 13-20 Final sections */}
            <div className="border border-gray-300 rounded-sm">
              <div className="bg-gray-100 font-semibold px-2 py-0.5 border-b border-gray-300">ADDITIONAL TASKS</div>
              <div className="p-1 text-[0.58rem] grid grid-cols-2 gap-x-1 gap-y-0.5">
                <ChecklistItem label="13. Appraisal Ordered" size="xs" />
                <ChecklistItem label="16. BRTI Repairs Complete" size="xs" />
                <ChecklistItem label="14. Mortgage Commitment" size="xs" />
                <ChecklistItem label="17. Utility Info Sent" size="xs" />
                <ChecklistItem label="15. Home Warranty Ordered" size="xs" />
                <ChecklistItem label="18. Closing Attendance" size="xs" />
                <ChecklistItem label="19. Escrow Check Received" size="xs" />
                <ChecklistItem label="20. Settlement Complete" size="xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for checklist items
const ChecklistItem = ({ 
  label, 
  className,
  size = "default"
}: { 
  label: string; 
  className?: string;
  size?: "default" | "xs";
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Checkbox className={cn(
        "h-3 w-3 border-gray-800 rounded-none", 
        size === "xs" && "h-2.5 w-2.5"
      )} />
      <Label className={cn(
        "text-[0.65rem]", 
        size === "xs" && "text-[0.58rem]"
      )}>
        {label}
      </Label>
    </div>
  );
};

export default TaskList;

import React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

// --- Utility Components matching reference styling ---
const BorderedBox = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "border-2 border-gray-900 rounded-none px-1.5 py-1 bg-white",
    className
  )}>{children}</div>
);

const SectionHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    "uppercase font-semibold text-[0.73rem] tracking-wide bg-[#F6F6F7] border-t-2 border-x-2 border-gray-900 px-2 py-1",
    className
  )}>
    {children}
  </div>
);

const SmallChecklistItem = ({
  label, sublabel, id, className = "", blankWidth = "", vertical = false, mini = false, disableCheckbox = false,
  horizontal = false,
}: {
  label: string; sublabel?: string; id?: string; className?: string; blankWidth?: string; vertical?: boolean; mini?: boolean; disableCheckbox?: boolean;
  horizontal?: boolean;
}) => (
  <div
    className={cn(
      horizontal ? "inline-flex mr-4" : "flex",
      "items-start gap-1",
      vertical ? "flex-col items-start" : "flex-row items-center",
      mini && "text-[0.62rem]",
      className
    )}
  >
    {!disableCheckbox && (
      <Checkbox id={id} className={cn("h-3 w-3 border-gray-900 rounded-none", mini && "h-2 w-2")} />
    )}
    <Label className={cn("text-[0.7rem] font-medium", mini && "text-[0.59rem]")} htmlFor={id}>
      {label}
      {blankWidth && <span className={cn("border-b border-gray-400 inline-block align-middle ml-1", blankWidth)}>&nbsp;</span>}
      {sublabel && <span className="font-normal text-gray-500"> {sublabel}</span>}
    </Label>
  </div>
);

const DocumentationChecklist = () => (
  <BorderedBox className="border-2 border-gray-900 bg-yellow-50 mb-1">
    <div className="uppercase font-semibold text-[0.7rem] tracking-wider border-b-2 border-gray-900 pb-0.5 pl-1 mb-1">Documentation Checklist</div>
    <div className="grid grid-cols-12 gap-x-1 gap-y-1 items-center text-[0.68rem]">
      {["AOS", "DEED", "DUAL", "WIRE", "CHECK", "KPSS", "SPD", "RLBPHN", "BEC", "PREQUAL", "FYP", "BAC", "SEC", "DMN", "CBC", "HW", "CN"].map((item, i) => (
        <div key={item} className="flex items-center gap-1 col-span-2">
          <Checkbox className="h-3 w-3 border-gray-900 rounded-none" id={`doccheck-${i}`} />
          <Label htmlFor={`doccheck-${i}`}>{item}</Label>
        </div>
      ))}
      <div className="col-span-4 flex items-center gap-4 border-l border-gray-600 pl-2">
        <div className="font-semibold text-[0.65rem]">KW ASA Signatures:</div>
        <div className="flex gap-4">
          {["BUYER", "SELLER", "AGENT"].map((role) => (
            <div key={role} className="flex items-center gap-1">
              <Checkbox className="h-3 w-3 border-gray-900 rounded-none" id={`kwasa-${role}`} />
              <Label htmlFor={`kwasa-${role}`} className="text-[0.62rem]">{role}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BorderedBox>
);

const ChecklistColumnA = () => (
  <div className="flex flex-col gap-0.5">
    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>1. Command</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="File Started" horizontal />
          <SmallChecklistItem label="File Submitted" horizontal />
          <SmallChecklistItem label="File Approved" horizontal />
          <SmallChecklistItem label="Commission Submitted" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>2. File Preparation</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Added to Pending Checklist" horizontal />
          <SmallChecklistItem label="Added to Calendar" horizontal />
          <SmallChecklistItem label="Tasks Set Up" horizontal />
          <SmallChecklistItem label="Pended MLS" horizontal />
          <SmallChecklistItem label="Added to ShowingTime" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>3. Introduction</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Sent to Client" horizontal />
          <SmallChecklistItem label="Sent to Agent" horizontal />
          <SmallChecklistItem label="Sent to Attorney" horizontal />
          <SmallChecklistItem label="Sent to Lender" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>4. Deposit</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Follow Up Sent to Buyer" horizontal />
          <SmallChecklistItem label="First Deposit Received" horizontal />
          <SmallChecklistItem label="Second Deposit Received" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>5. Mtg App & Appraisal Order</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Follow Up with Buyer's Agent" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>6. Title Work</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Title Work Ordered" horizontal />
          <SmallChecklistItem label="Seller's Info Sent to Title Company" horizontal />
          <SmallChecklistItem label="TC Invoice Sent to Title Company" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>7. Right of First Refusal</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Requested" horizontal />
          <SmallChecklistItem label="Received" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>8. Home Inspection Scheduled</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="House/Septic Ready" horizontal />
          <SmallChecklistItem label="Gate Pass" horizontal />
        </div>
        <div className="flex items-center gap-x-2 mt-1">
          <span className="font-medium text-[0.63rem]">Inspection Reports:</span>
          <div className="flex gap-x-4">
            <SmallChecklistItem label="Received" mini horizontal />
            <SmallChecklistItem label="Sent to Client" mini horizontal />
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>9. BRTI</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Prepared/Received" horizontal />
          <SmallChecklistItem label="Sent to Seller" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>10. CIT Addendum</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Prepared" horizontal />
          <SmallChecklistItem label="Sent" horizontal />
          <SmallChecklistItem label="Signed" horizontal />
        </div>
      </div>
    </BorderedBox>
  </div>
);

const ChecklistColumnB = () => (
  <div className="flex flex-col gap-0.5">
    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>11. Order Resale Certificate</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Date:</span>
            <span className="border-b border-gray-400 inline-block w-16">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Seller Paid:</span>
            <span className="border-b border-gray-400 inline-block w-16">&nbsp;</span>
          </div>
          <SmallChecklistItem label="Resale Cert Received" horizontal />
        </div>
        <div className="flex flex-wrap gap-x-4 mt-1">
          <SmallChecklistItem label="Copy Sent to Buyer" horizontal />
          <SmallChecklistItem label="Copy Sent to Seller" horizontal />
          <SmallChecklistItem label="Copy Sent to Title Company" horizontal />
        </div>
        <div className="mt-1">
          <span className="font-semibold text-[0.63rem]">Receipt of Documents:</span>
          <div className="flex flex-wrap items-center gap-x-4 mt-0.5">
            <div className="flex items-center gap-x-1 whitespace-nowrap">
              <span className="text-[0.63rem]">Sent to Buyer:</span>
              <span className="border-b border-gray-400 inline-block w-16">&nbsp;</span>
            </div>
            <SmallChecklistItem label="Fully Signed" horizontal />
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>11b. Additional Info</SectionHeader>
      <div className="p-1">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Name:</span>
            <span className="border-b border-gray-400 inline-block w-24">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Phone:</span>
            <span className="border-b border-gray-400 inline-block w-24">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Email:</span>
            <span className="border-b border-gray-400 inline-block w-24">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Cost:</span>
            <span className="border-b border-gray-400 inline-block w-24">&nbsp;</span>
          </div>
          <div className="col-span-2 flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Resale Cert Expiration:</span>
            <span className="border-b border-gray-400 inline-block w-24">&nbsp;</span>
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>12. Certificate of Occupancy</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Request Payment" horizontal />
          <SmallChecklistItem label="Seller Paid" horizontal />
          <SmallChecklistItem label="Inspection Set" horizontal />
          <SmallChecklistItem label="C/O Received" horizontal />
          <SmallChecklistItem label="Sent Copy to Buyer" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>12b. Additional Info</SectionHeader>
      <div className="p-1">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Township:</span>
            <span className="border-b border-gray-400 inline-block w-20">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Phone:</span>
            <span className="border-b border-gray-400 inline-block w-20">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Email:</span>
            <span className="border-b border-gray-400 inline-block w-20">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Cost:</span>
            <span className="border-b border-gray-400 inline-block w-16">&nbsp;</span>
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>13. Appraisal</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Ordered" horizontal />
          <SmallChecklistItem label="Scheduled:" blankWidth="w-11" disableCheckbox />
          <SmallChecklistItem label="Value OK?" horizontal />
        </div>
        <div className="flex flex-wrap gap-x-4 mt-1">
          <span className="font-semibold text-[0.62rem]">Appraisal Repairs</span>
          <div className="pl-2 flex flex-col gap-0.5">
            <SmallChecklistItem label="Yes" mini />
            <SmallChecklistItem label="Repairs Completed:" className="pl-3" blankWidth="w-10" disableCheckbox mini />
            <SmallChecklistItem label="Notify Lender:" className="pl-3" blankWidth="w-10" disableCheckbox mini />
            <SmallChecklistItem label="No" mini />
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>13b. Additional Info</SectionHeader>
      <div className="p-1">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Appraiser:</span>
            <span className="border-b border-gray-400 inline-block w-14">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Date of Inspection:</span>
            <span className="border-b border-gray-400 inline-block w-14">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Phone:</span>
            <span className="border-b border-gray-400 inline-block w-14">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Email:</span>
            <span className="border-b border-gray-400 inline-block w-18">&nbsp;</span>
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>14. Home Warranty</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Ordered" horizontal />
          <SmallChecklistItem label="Sent Invoice to Title Company" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>15. Title Work</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Title Work Ordered" horizontal />
          <SmallChecklistItem label="Seller's Info Sent to Title Company" horizontal />
          <SmallChecklistItem label="TC Invoice Sent to Title Company" horizontal />
        </div>
      </div>
    </BorderedBox>
  </div>
);

const ChecklistColumnC = () => (
  <div className="flex flex-col gap-0.5">
    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>16. BRTI Repairs</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Follow Up with Seller" horizontal />
          <SmallChecklistItem label="Request Receipts" horizontal />
          <SmallChecklistItem label="Repairs Finished" horizontal />
          <SmallChecklistItem label="Receipts Received" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>17. Utility Info</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Requested from Seller" horizontal />
          <SmallChecklistItem label="Received" horizontal />
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Sent to Buyer:</span>
            <span className="border-b border-gray-400 inline-block w-20">&nbsp;</span>
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>18. Closing Attendance</SectionHeader>
      <div className="p-1">
        <span className="font-semibold text-[0.62rem]">Client Attendance (Choose One):</span>
        <div className="flex flex-wrap gap-x-4 mt-1">
          <SmallChecklistItem label="Client Attending" horizontal />
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <SmallChecklistItem label="Documents Sent to Client:" horizontal />
            <span className="border-b border-gray-400 inline-block w-20">&nbsp;</span>
          </div>
        </div>
        <div className="flex items-center gap-x-1 whitespace-nowrap mt-1">
          <SmallChecklistItem label="Documents Signed Early at Title Company:" horizontal />
          <span className="border-b border-gray-400 inline-block w-20">&nbsp;</span>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>19. Escrow Check</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap items-center gap-x-4">
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.63rem]">Request Escrow Check:</span>
            <span className="border-b border-gray-400 inline-block w-20">&nbsp;</span>
          </div>
          <SmallChecklistItem label="Confirm Receipt" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>19b. Additional Info</SectionHeader>
      <div className="p-1">
        <div className="flex items-center gap-x-2">
          <span className="text-[0.63rem]">(Choose One):</span>
          <span className="text-[0.63rem]">Convention Check / Electronic Check</span>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>20. Settlement</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="Send Request to Title Company" horizontal />
          <SmallChecklistItem label="Clear to Close" horizontal />
          <SmallChecklistItem label="Send Settlement Notice" horizontal />
        </div>
        <div className="pl-3 flex flex-col gap-0.5">
          <SmallChecklistItem label="Listing Agent" mini />
          <SmallChecklistItem label="Seller" mini />
          <SmallChecklistItem label="Buyer" mini />
          <SmallChecklistItem label="Buyer's Agent" mini />
          <SmallChecklistItem label="Attorney" mini />
        </div>
        <SmallChecklistItem label="Reserve Conference Room" />
        <SmallChecklistItem label="Schedule Walkthrough" />
        <span className="font-medium text-[0.62rem]">Pre-Settlement Walkthrough Report & Settlement Info Sheet</span>
        <div className="pl-2 flex flex-col gap-0.5">
          <SmallChecklistItem label="Prepared" mini />
          <SmallChecklistItem label="Sent to Agent" mini />
        </div>
        <span className="font-medium text-[0.62rem]">HUD</span>
        <div className="pl-2 flex flex-col gap-0.5">
          <SmallChecklistItem label="Requested" mini />
          <SmallChecklistItem label="Reviewed" mini />
          <SmallChecklistItem label="Shared" mini />
        </div>
        <span className="font-medium text-[0.62rem]">Command</span>
        <div className="pl-2 flex flex-col gap-0.5">
          <SmallChecklistItem label="Signed Closing Document Collection" mini />
          <SmallChecklistItem label="HUD" mini />
          <SmallChecklistItem label="Commission Check" mini />
          <SmallChecklistItem label="PSW Report" mini />
          <SmallChecklistItem label="Settlement Info Sheet" mini />
        </div>
        <SmallChecklistItem label="Upload Closing Documents to Command & Submit" />
        <SmallChecklistItem label="Submit Commission in Command" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>20b. Additional Info</SectionHeader>
      <div className="p-1">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.62rem]">Preferred Time:</span>
            <span className="border-b border-gray-400 inline-block w-11">&nbsp;</span>
          </div>
          <div className="flex items-center gap-x-1 whitespace-nowrap">
            <span className="text-[0.62rem]">Preferred Location:</span>
            <span className="border-b border-gray-400 inline-block w-14">&nbsp;</span>
          </div>
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>21. Close Out Listing in MLS</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-4">
          <SmallChecklistItem label="PMAR" horizontal />
          <SmallChecklistItem label="GLVR" horizontal />
        </div>
      </div>
    </BorderedBox>
  </div>
);

const TransactionTaskList = () => {
  return (
    <div className="w-full flex flex-col items-center pt-4 pb-2 print:shadow-none bg-white">
      <BorderedBox className="max-w-[8.5in] min-h-[11in] mx-auto bg-white print:shadow-none print:border-2 border-gray-900 shadow px-2.5 pb-1 flex flex-col gap-1 justify-between" >
        <div className="flex justify-between items-end mt-0.5 mb-1">
          <div>
            <h1 className="text-[1.25rem] font-bold tracking-tight text-gray-900 leading-tight">Transaction Coordinator Task List</h1>
            <p className="text-[0.83rem] text-gray-600 uppercase tracking-widest">Designed to match Quick Reference – Clip Edition</p>
          </div>
          <Link to="/" className="text-xs underline text-blue-700 print:hidden">Home</Link>
        </div>

        <DocumentationChecklist />

        <BorderedBox className="border-2 border-gray-900 mb-1 pt-1 pb-0.5 px-1.5">
          <div className="grid grid-cols-3 gap-x-3 gap-y-1">
            <ChecklistColumnA />
            <ChecklistColumnB />
            <ChecklistColumnC />
          </div>
        </BorderedBox>

        <div className="flex justify-end pt-1 pb-0.5">
          <span className="text-[0.6rem] text-gray-400 pr-2">
            CLIP v{`${new Date().getFullYear()}`} • Transaction Task List Signature Edition™
          </span>
        </div>
      </BorderedBox>
    </div>
  );
};

export default TransactionTaskList;

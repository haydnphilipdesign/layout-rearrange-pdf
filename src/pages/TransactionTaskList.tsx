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
    "uppercase font-semibold text-[0.73rem] tracking-wide bg-[#F6F6F7] border-t-2 border-x-2 border-gray-900 px-2 py-1 mb-0.5",
    className
  )}>
    {children}
  </div>
);

const SmallChecklistItem = ({
  label, sublabel, id, className = "", blankWidth = "", vertical = false, mini = false, disableCheckbox = false,
  horizontal = false, // New prop for side-by-side layout
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

// --- Updated column sections for better height balance and print fit ---
const ChecklistColumnA = () => (
  <div className="flex flex-col gap-0.5">
    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>1. Command</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap">
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
        <div className="flex flex-wrap">
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
        <div className="flex flex-wrap">
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
        <div className="flex flex-wrap">
          <SmallChecklistItem label="Follow Up Sent to Buyer" horizontal />
          <SmallChecklistItem label="First Deposit Received" horizontal />
          <SmallChecklistItem label="Second Deposit Received" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>5. Mtg App & Appraisal Order</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Follow Up with Buyer’s Agent" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>6. Title Work</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Title Work Ordered" />
        <SmallChecklistItem label="Seller's Info Sent to Title Company" />
        <SmallChecklistItem label="TC Invoice Sent to Title Company" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>7. Right of First Refusal</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Requested" />
        <SmallChecklistItem label="Received" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>8. Home Inspection Scheduled</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="House/Septic Ready" />
        <SmallChecklistItem label="Gate Pass" />
        <div className="pl-3">
          <span className="font-medium text-[0.63rem]">Inspection Reports:</span>
          <SmallChecklistItem label="Received" className="pl-2" mini />
          <SmallChecklistItem label="Sent to Client" className="pl-2" mini />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>9. BRTI</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Prepared/Received" />
        <SmallChecklistItem label="Sent to Seller" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>10. CIT Addendum</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Prepared" />
        <SmallChecklistItem label="Sent" />
        <SmallChecklistItem label="Signed" />
      </div>
    </BorderedBox>
  </div>
);

const ChecklistColumnB = () => (
  <div className="flex flex-col gap-0.5">
    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>11. Order Resale Certificate</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap">
          <SmallChecklistItem label="Date:" className="pl-2" blankWidth="w-8" disableCheckbox horizontal />
          <SmallChecklistItem label="Seller Paid:" className="pl-2" blankWidth="w-8" disableCheckbox horizontal />
          <SmallChecklistItem label="Resale Cert Received" horizontal />
        </div>
        <div className="flex flex-wrap">
          <SmallChecklistItem label="Copy Sent to Buyer" mini horizontal />
          <SmallChecklistItem label="Copy Sent to Seller" mini horizontal />
          <SmallChecklistItem label="Copy Sent to Title Company" mini horizontal />
        </div>
        <span className="font-semibold text-[0.63rem] mt-1">Receipt of Documents:</span>
        <div className="flex flex-wrap">
          <SmallChecklistItem label="Sent to Buyer:" className="pl-2" blankWidth="w-10" disableCheckbox horizontal />
          <SmallChecklistItem label="Fully Signed" horizontal />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>11b. Additional Info</SectionHeader>
      <div className="p-1">
        <span className="text-[0.63rem]">Name: <span className="border-b border-gray-400 inline-block w-20"></span></span>
        <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-400 inline-block w-20"></span></span>
        <span className="text-[0.63rem]">Email: <span className="border-b border-gray-400 inline-block w-20"></span></span>
        <span className="text-[0.63rem]">Resale Cert Expiration: <span className="border-b border-gray-400 inline-block w-11"></span></span>
        <span className="text-[0.63rem]">Cost: <span className="border-b border-gray-400 inline-block w-16"></span></span>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>12. Certificate of Occupancy</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Request Payment" />
        <SmallChecklistItem label="Seller Paid" />
        <SmallChecklistItem label="Inspection Set" />
        <SmallChecklistItem label="C/O Received" />
        <SmallChecklistItem label="Sent Copy to Buyer" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>12b. Additional Info</SectionHeader>
      <div className="p-1">
        <span className="text-[0.63rem]">Township: <span className="border-b border-gray-400 inline-block w-20"></span></span>
        <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-400 inline-block w-20"></span></span>
        <span className="text-[0.63rem]">Email: <span className="border-b border-gray-400 inline-block w-20"></span></span>
        <span className="text-[0.63rem]">Cost: <span className="border-b border-gray-400 inline-block w-16"></span></span>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>13. Appraisal</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Ordered" />
        <SmallChecklistItem label="Scheduled:" blankWidth="w-11" disableCheckbox />
        <SmallChecklistItem label="Value OK?" />
        <span className="font-semibold text-[0.62rem]">Appraisal Repairs</span>
        <div className="pl-2 flex flex-col gap-0.5">
          <SmallChecklistItem label="Yes" mini />
          <SmallChecklistItem label="Repairs Completed:" className="pl-3" blankWidth="w-10" disableCheckbox mini />
          <SmallChecklistItem label="Notify Lender:" className="pl-3" blankWidth="w-10" disableCheckbox mini />
          <SmallChecklistItem label="No" mini />
        </div>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>13b. Additional Info</SectionHeader>
      <div className="p-1">
        <span className="text-[0.63rem]">Appraiser: <span className="border-b border-gray-400 inline-block w-14"></span></span>
        <span className="text-[0.63rem]">Date of Inspection: <span className="border-b border-gray-400 inline-block w-14"></span></span>
        <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-400 inline-block w-14"></span></span>
        <span className="text-[0.63rem]">Email: <span className="border-b border-gray-400 inline-block w-18"></span></span>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>14. Home Warranty</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Ordered" />
        <SmallChecklistItem label="Sent Invoice to Title Company" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>15. Title Work</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Title Work Ordered" />
        <SmallChecklistItem label="Seller's Info Sent to Title Company" />
        <SmallChecklistItem label="TC Invoice Sent to Title Company" />
      </div>
    </BorderedBox>
  </div>
);

const ChecklistColumnC = () => (
  <div className="flex flex-col gap-0.5">
    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>16. BRTI Repairs</SectionHeader>
      <div className="p-1">
        <div className="flex flex-wrap">
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
        <SmallChecklistItem label="Requested from Seller" />
        <SmallChecklistItem label="Received" />
        <SmallChecklistItem label="Sent to Buyer:" blankWidth="w-11" disableCheckbox />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>18. Closing Attendance</SectionHeader>
      <div className="p-1">
        <span className="font-semibold text-[0.62rem]">Client Attendance (Choose One):</span>
        <SmallChecklistItem label="Client Attending" mini />
        <SmallChecklistItem label="Documents Sent to Client:" blankWidth="w-10" disableCheckbox mini />
        <SmallChecklistItem label="Documents Signed Early at Title Company:" blankWidth="w-13" disableCheckbox mini />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>19. Escrow Check</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Request Escrow Check:" blankWidth="w-10" disableCheckbox />
        <SmallChecklistItem label="Confirm Receipt" />
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>19b. Additional Info</SectionHeader>
      <div className="p-1">
        <span className="text-[0.63rem]">(Choose One):<span className="ml-2">Convention Check / Electronic Check</span></span>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>20. Settlement</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="Send Request to Title Company" />
        <SmallChecklistItem label="Clear to Close" />
        <SmallChecklistItem label="Send Settlement Notice" />
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
        <span className="text-[0.62rem]">Preferred Time: <span className="border-b border-gray-400 inline-block w-11"></span></span>
        <span className="text-[0.62rem]">Preferred Location: <span className="border-b border-gray-400 inline-block w-14"></span></span>
      </div>
    </BorderedBox>

    <BorderedBox className="border-2 border-gray-900 mb-2">
      <SectionHeader>21. Close Out Listing in MLS</SectionHeader>
      <div className="p-1">
        <SmallChecklistItem label="PMAR" />
        <SmallChecklistItem label="GLVR" />
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

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
    "uppercase font-semibold text-[0.73rem] tracking-wide bg-gray-100 border-t-2 border-x-2 border-gray-900 px-2 py-1 mb-0.5",
    className
  )}>
    {children}
  </div>
);

const SmallChecklistItem = ({
  label, sublabel, id, className = "", blankWidth = "", vertical = false, mini = false, disableCheckbox = false,
}: {
  label: string; sublabel?: string; id?: string; className?: string; blankWidth?: string; vertical?: boolean; mini?: boolean; disableCheckbox?: boolean;
}) => (
  <div
    className={cn(
      "flex items-start gap-1",
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

// --- Updated column sections for better height balance and print fit ---
const ChecklistColumnA = () => (
  <div className="flex flex-col gap-0.5">
    <SectionHeader>1. Command</SectionHeader>
    <SmallChecklistItem label="File Started" />
    <SmallChecklistItem label="File Submitted" />
    <SmallChecklistItem label="File Approved" />
    <SmallChecklistItem label="Commission Submitted" />

    <SectionHeader>2. File Preparation</SectionHeader>
    <SmallChecklistItem label="Added to Pending Checklist" />
    <SmallChecklistItem label="Added to Calendar" />
    <SmallChecklistItem label="Tasks Set Up" />
    <SmallChecklistItem label="Pended MLS" />
    <SmallChecklistItem label="Added to ShowingTime" />

    <SectionHeader>3. Introduction</SectionHeader>
    <SmallChecklistItem label="Sent to Client" />
    <SmallChecklistItem label="Sent to Agent" />
    <SmallChecklistItem label="Sent to Attorney" />
    <SmallChecklistItem label="Sent to Lender" />

    <SectionHeader>4. Deposit</SectionHeader>
    <SmallChecklistItem label="Follow Up Sent to Buyer" />
    <SmallChecklistItem label="First Deposit Received" />
    <SmallChecklistItem label="Second Deposit Received" />

    <SectionHeader>5. Mtg App & Appraisal Order</SectionHeader>
    <SmallChecklistItem label="Follow Up with Buyer’s Agent" />

    <SectionHeader>6. Title Work</SectionHeader>
    <SmallChecklistItem label="Title Work Ordered" />
    <SmallChecklistItem label="Seller's Info Sent to Title Company" />
    <SmallChecklistItem label="TC Invoice Sent to Title Company" />

    <SectionHeader>7. Right of First Refusal</SectionHeader>
    <SmallChecklistItem label="Requested" />
    <SmallChecklistItem label="Received" />

    <SectionHeader>8. Home Inspection Scheduled</SectionHeader>
    <SmallChecklistItem label="House/Septic Ready" />
    <SmallChecklistItem label="Gate Pass" />
    <div className="pl-3">
      <span className="font-medium text-[0.63rem]">Inspection Reports:</span>
      <SmallChecklistItem label="Received" className="pl-2" mini />
      <SmallChecklistItem label="Sent to Client" className="pl-2" mini />
    </div>

    <SectionHeader>9. BRTI</SectionHeader>
    <SmallChecklistItem label="Prepared/Received" />
    <SmallChecklistItem label="Sent to Seller" />

    <SectionHeader>10. CIT Addendum</SectionHeader>
    <SmallChecklistItem label="Prepared" />
    <SmallChecklistItem label="Sent" />
    <SmallChecklistItem label="Signed" />
  </div>
);

const ChecklistColumnB = () => (
  <div className="flex flex-col gap-0.5">
    <SectionHeader>11. Order Resale Certificate</SectionHeader>
    <SmallChecklistItem label="Date:" className="pl-2" blankWidth="w-8" disableCheckbox />
    <SmallChecklistItem label="Requested Payment from Seller:" className="pl-2" blankWidth="w-8" disableCheckbox />
    <SmallChecklistItem label="Seller Paid:" className="pl-2" blankWidth="w-8" disableCheckbox />
    <SmallChecklistItem label="Resale Cert Received" />
    <div className="pl-3 flex flex-col gap-0.5">
      <SmallChecklistItem label="Copy Sent to Buyer" mini />
      <SmallChecklistItem label="Copy Sent to Seller" mini />
      <SmallChecklistItem label="Copy Sent to Title Company" mini />
    </div>
    <span className="font-semibold text-[0.63rem] mt-1">Receipt of Documents:</span>
    <SmallChecklistItem label="Sent to Buyer:" className="pl-2" blankWidth="w-10" disableCheckbox />
    <SmallChecklistItem label="Fully Signed" className="pl-2" />

    <SectionHeader>11b. Additional Info</SectionHeader>
    <span className="text-[0.63rem]">Name: <span className="border-b border-gray-400 inline-block w-20"></span></span>
    <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-400 inline-block w-20"></span></span>
    <span className="text-[0.63rem]">Email: <span className="border-b border-gray-400 inline-block w-20"></span></span>
    <span className="text-[0.63rem]">Resale Cert Expiration: <span className="border-b border-gray-400 inline-block w-11"></span></span>
    <span className="text-[0.63rem]">Cost: <span className="border-b border-gray-400 inline-block w-16"></span></span>

    <SectionHeader>12. Certificate of Occupancy</SectionHeader>
    <SmallChecklistItem label="Request Payment" />
    <SmallChecklistItem label="Seller Paid" />
    <SmallChecklistItem label="Inspection Set" />
    <SmallChecklistItem label="C/O Received" />
    <SmallChecklistItem label="Sent Copy to Buyer" />

    <SectionHeader>12b. Additional Info</SectionHeader>
    <span className="text-[0.63rem]">Township: <span className="border-b border-gray-400 inline-block w-20"></span></span>
    <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-400 inline-block w-20"></span></span>
    <span className="text-[0.63rem]">Email: <span className="border-b border-gray-400 inline-block w-20"></span></span>
    <span className="text-[0.63rem]">Cost: <span className="border-b border-gray-400 inline-block w-16"></span></span>

    <SectionHeader>13. Appraisal</SectionHeader>
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
    <SectionHeader>13b. Additional Info</SectionHeader>
    <span className="text-[0.63rem]">Appraiser: <span className="border-b border-gray-400 inline-block w-14"></span></span>
    <span className="text-[0.63rem]">Date of Inspection: <span className="border-b border-gray-400 inline-block w-14"></span></span>
    <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-400 inline-block w-14"></span></span>
    <span className="text-[0.63rem]">Email: <span className="border-b border-gray-400 inline-block w-18"></span></span>

    <SectionHeader>14. Mortgage Commitment</SectionHeader>
    <SmallChecklistItem label="Due Date:" blankWidth="w-10" disableCheckbox />
    <SmallChecklistItem label="Requested:" blankWidth="w-10" disableCheckbox />
    <SmallChecklistItem label="Received:" blankWidth="w-10" disableCheckbox />
    <SmallChecklistItem label="Sent to Seller" />

    <SectionHeader>15. Home Warranty</SectionHeader>
    <SmallChecklistItem label="Ordered" />
    <SmallChecklistItem label="Sent Invoice to Title Company" />

    <SectionHeader>16. BRTI Repairs</SectionHeader>
    <SmallChecklistItem label="Follow Up with Seller" />
    <SmallChecklistItem label="Request Receipts" />
    <SmallChecklistItem label="Repairs Finished" />
    <SmallChecklistItem label="Receipts Received" />
  </div>
);

const ChecklistColumnC = () => (
  <div className="flex flex-col gap-0.5">
    <SectionHeader>17. Utility Info</SectionHeader>
    <SmallChecklistItem label="Requested from Seller" />
    <SmallChecklistItem label="Received" />
    <SmallChecklistItem label="Sent to Buyer:" blankWidth="w-11" disableCheckbox />

    <SectionHeader>18. Closing Attendance</SectionHeader>
    <span className="font-semibold text-[0.62rem]">Client Attendance (Choose One):</span>
    <SmallChecklistItem label="Client Attending" mini />
    <SmallChecklistItem label="Documents Sent to Client:" blankWidth="w-10" disableCheckbox mini />
    <SmallChecklistItem label="Documents Signed Early at Title Company:" blankWidth="w-13" disableCheckbox mini />

    <SectionHeader>19. Escrow Check</SectionHeader>
    <SmallChecklistItem label="Request Escrow Check:" blankWidth="w-10" disableCheckbox />
    <SmallChecklistItem label="Confirm Receipt" />

    <SectionHeader>19b. Additional Info</SectionHeader>
    <span className="text-[0.63rem]">(Choose One):<span className="ml-2">Convention Check / Electronic Check</span></span>

    <SectionHeader>20. Settlement</SectionHeader>
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

    <SectionHeader>20b. Additional Info</SectionHeader>
    <span className="text-[0.62rem]">Preferred Time: <span className="border-b border-gray-400 inline-block w-11"></span></span>
    <span className="text-[0.62rem]">Preferred Location: <span className="border-b border-gray-400 inline-block w-14"></span></span>

    <SectionHeader>21. Close Out Listing in MLS</SectionHeader>
    <SmallChecklistItem label="PMAR" />
    <SmallChecklistItem label="GLVR" />
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
      <div className="col-span-4 flex flex-col gap-0.5 border-l border-gray-600 pl-2">
        <div className="font-semibold text-[0.65rem]">KW ASA Signatures:</div>
        <div className="grid grid-cols-3 gap-1">
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

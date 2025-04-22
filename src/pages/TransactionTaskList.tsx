
import React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

// --- Section Components ---

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="font-semibold text-[0.7rem] bg-blue-50 border-t-2 border-x-2 border-gray-800 px-2 py-0.5 tracking-wide mb-1">
    {children}
  </div>
);

const SmallChecklistItem = ({
  label,
  sublabel,
  id,
  className,
  blankWidth = "",
  vertical = false,
  mini = false,
  disableCheckbox = false,
}: {
  label: string;
  sublabel?: string;
  id?: string;
  className?: string;
  blankWidth?: string;
  vertical?: boolean;
  mini?: boolean;
  disableCheckbox?: boolean;
}) => (
  <div
    className={cn(
      "flex items-start gap-1",
      vertical ? "flex-col items-start" : "flex-row items-center",
      mini && "text-[0.6rem]",
      className
    )}
  >
    {!disableCheckbox && (
      <Checkbox id={id} className={cn("h-3 w-3 border-gray-800 rounded-none", mini && "h-2 w-2")} />
    )}
    <Label className={cn("text-[0.66rem]", mini && "text-[0.59rem]")} htmlFor={id}>
      {label}
      {blankWidth && <span className={cn("border-b border-gray-300 inline-block align-middle ml-1", blankWidth)}>&nbsp;</span>}
      {sublabel && <span className="font-normal text-gray-500"> {sublabel}</span>}
    </Label>
  </div>
);

// Main page
const TransactionTaskList = () => {
  return (
    <div className="w-full flex flex-col items-center pt-4 pb-2 print:shadow-none bg-white">
      <div className="max-w-[8.5in] min-h-[11in] bg-white shadow border border-gray-300 print:shadow-none print:border-0 px-3 py-2 flex flex-col gap-1">

        {/* Title and Quick Navigation */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-gray-800">Transaction Coordinator Task List</h1>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Designed to match Quick Reference • Clip Edition</p>
          </div>
          <Link to="/" className="text-xs underline text-blue-700 print:hidden">Home</Link>
        </div>

        {/* Documentation Checklist */}
        <SectionHeader>DOCUMENTATION CHECKLIST</SectionHeader>
        <div className="border-2 border-gray-800 grid grid-cols-12 gap-x-1 gap-y-1 p-2 items-center mb-2 text-[0.66rem] bg-yellow-50">
          {[
            "AOS", "DEED", "DUAL", "WIRE", "CHECK", "KPSS", "SPD", "RLBPHN",
            "BEC", "PREQUAL", "FYP", "BAC", "SEC", "DMN", "CBC", "HW", "CN",
          ].map((item, i) => (
            <div key={item} className="flex items-center gap-1 col-span-2">
              <Checkbox className="h-3 w-3 border-gray-800 rounded-none" id={`doccheck-${i}`} />
              <Label htmlFor={`doccheck-${i}`}>{item}</Label>
            </div>
          ))}
          {/* KW ASA signatures */}
          <div className="col-span-4 flex flex-col gap-1 border-l border-gray-300 pl-2">
            <div className="font-semibold text-[0.65rem]">KW ASA Signatures:</div>
            <div className="grid grid-cols-3 gap-1">
              {["BUYER", "SELLER", "AGENT"].map((role) => (
                <div key={role} className="flex items-center gap-1">
                  <Checkbox className="h-3 w-3 border-gray-800 rounded-none" id={`kwasa-${role}`} />
                  <Label htmlFor={`kwasa-${role}`} className="text-[0.65rem]">{role}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid: Use two columns for all steps */}
        <div className="flex-grow grid grid-cols-2 gap-x-4 gap-y-2">

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-1 text-[0.63rem]">
            {/* Each main section */}
            <ChecklistColumn />

            {/* Add a subtle "footer" for left column if needed for balance */}
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-1 text-[0.63rem]">
            {/* Secondary half (cont. from ChecklistColumn) */}
            <ChecklistColumn2 />
          </div>
        </div>

        {/* Gentle visual divider for print */}
        <div className="h-0.5 bg-gray-100 my-1 w-full" />

        {/* Print footer */}
        <div className="flex justify-end pt-1">
          <span className="text-[0.57rem] text-gray-400 pr-2">
            CLIP v{`{CURRENT_YEAR}`} • Transaction Task List Signature Edition™
          </span>
        </div>
      </div>
    </div>
  );
};

// --- First column (steps 1-12b) ---
const ChecklistColumn = () => (
  <>
    <SectionHeader>1. COMMAND</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="File Started" />
      <SmallChecklistItem label="File Submitted" />
      <SmallChecklistItem label="File Approved" />
      <SmallChecklistItem label="Commission Submitted" />
    </div>

    <SectionHeader>2. FILE PREPARATION</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Added to Pending Checklist" />
      <SmallChecklistItem label="Added to Calendar" />
      <SmallChecklistItem label="Tasks Set Up" />
      <SmallChecklistItem label="Pended MLS" />
      <SmallChecklistItem label="Added to ShowingTime" />
    </div>

    <SectionHeader>3. INTRODUCTION</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Sent to Client" />
      <SmallChecklistItem label="Sent to Agent" />
      <SmallChecklistItem label="Sent to Attorney" />
      <SmallChecklistItem label="Sent to Lender" />
    </div>

    <SectionHeader>4. DEPOSIT</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Follow Up Sent to Buyer" />
      <SmallChecklistItem label="First Deposit Received" />
      <SmallChecklistItem label="Second Deposit Received" />
    </div>

    <SectionHeader>5. MORTGAGE APPLICATION & APPRAISAL ORDER</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Follow Up with Buyer’s Agent" />
    </div>

    <SectionHeader>6. TITLE WORK</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Title Work Ordered" />
      <SmallChecklistItem label="Seller's Info Sent to Title Company" />
      <SmallChecklistItem label="TC Invoice Sent to Title Company" />
    </div>

    <SectionHeader>7. RIGHT OF FIRST REFUSAL</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Requested" />
      <SmallChecklistItem label="Received" />
    </div>

    <SectionHeader>8. HOME INSPECTION SCHEDULED</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="House/Septic Ready" />
      <SmallChecklistItem label="Gate Pass" />
      <div className="pl-3">
        <span className="font-medium text-[0.6rem]">Inspection Reports:</span>
        <SmallChecklistItem label="Received" className="pl-2" mini />
        <SmallChecklistItem label="Sent to Client" className="pl-2" mini />
      </div>
    </div>

    <SectionHeader>9. BRTI</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Prepared/Received" />
      <SmallChecklistItem label="Sent to Seller" />
    </div>

    <SectionHeader>10. CIT ADDENDUM</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Prepared" />
      <SmallChecklistItem label="Sent" />
      <SmallChecklistItem label="Signed" />
    </div>

    <SectionHeader>11. ORDER RESALE CERTIFICATE</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem 
        label="Date:" 
        className="pl-2" 
        blankWidth="w-16"
        disableCheckbox />
      <SmallChecklistItem 
        label="Requested Payment from Seller:" 
        className="pl-2" 
        blankWidth="w-10"
        disableCheckbox />
      <SmallChecklistItem 
        label="Seller Paid:" 
        className="pl-4" 
        blankWidth="w-14"
        disableCheckbox />
      <SmallChecklistItem 
        label="Resale Cert Received" />
      <div className="pl-4 flex flex-col gap-0.5">
        <SmallChecklistItem label="Copy Sent to Buyer" mini />
        <SmallChecklistItem label="Copy Sent to Seller" mini />
        <SmallChecklistItem label="Copy Sent to Title Company" mini />
      </div>
      <span className="font-medium text-[0.62rem] mt-1">Receipt of Documents:</span>
      <SmallChecklistItem 
        label="Sent to Buyer:" 
        className="pl-2"
        blankWidth="w-20"
        disableCheckbox />
      <SmallChecklistItem
        label="Fully Signed"
        className="pl-4"
      />
    </div>

    <SectionHeader>11b. ADDITIONAL INFORMATION</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <span className="text-[0.63rem]">Name: <span className="border-b border-gray-300 inline-block w-28"></span></span>
      <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-300 inline-block w-28"></span></span>
      <span className="text-[0.63rem]">Email: <span className="border-b border-gray-300 inline-block w-28"></span></span>
      <span className="text-[0.63rem]">Resale Cert Expiration: <span className="border-b border-gray-300 inline-block w-20"></span></span>
      <span className="text-[0.63rem]">Cost: <span className="border-b border-gray-300 inline-block w-28"></span></span>
    </div>

    <SectionHeader>12. CERTIFICATE OF OCCUPANCY</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Request Payment" />
      <SmallChecklistItem label="Seller Paid" />
      <SmallChecklistItem label="Inspection Set" />
      <SmallChecklistItem label="C/O Received" />
      <SmallChecklistItem label="Sent Copy to Buyer" />
    </div>

    <SectionHeader>12b. ADDITIONAL INFORMATION</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <span className="text-[0.63rem]">Township: <span className="border-b border-gray-300 inline-block w-28"></span></span>
      <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-300 inline-block w-28"></span></span>
      <span className="text-[0.63rem]">Email: <span className="border-b border-gray-300 inline-block w-28"></span></span>
      <span className="text-[0.63rem]">Cost: <span className="border-b border-gray-300 inline-block w-28"></span></span>
    </div>
  </>
);

// --- Second column (steps 13-21) ---
const ChecklistColumn2 = () => (
  <>
    <SectionHeader>13. APPRAISAL</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Ordered" />
      <SmallChecklistItem label="Scheduled:" blankWidth="w-16" disableCheckbox />
      <SmallChecklistItem label="Value OK?" />
      <span className="font-semibold text-[0.62rem]">Appraisal Repairs</span>
      <div className="pl-2 flex flex-col gap-0.5">
        <SmallChecklistItem label="Yes" mini />
        <SmallChecklistItem label="Repairs Completed:" className="pl-2" blankWidth="w-12" disableCheckbox mini />
        <SmallChecklistItem label="Notify Lender:" className="pl-2" blankWidth="w-12" disableCheckbox mini />
        <SmallChecklistItem label="No" mini />
      </div>
    </div>
    <SectionHeader>13b. ADDITIONAL INFORMATION</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <span className="text-[0.63rem]">Appraiser: <span className="border-b border-gray-300 inline-block w-24"></span></span>
      <span className="text-[0.63rem]">Date of Inspection: <span className="border-b border-gray-300 inline-block w-20"></span></span>
      <span className="text-[0.63rem]">Phone: <span className="border-b border-gray-300 inline-block w-24"></span></span>
      <span className="text-[0.63rem]">Email: <span className="border-b border-gray-300 inline-block w-28"></span></span>
    </div>
    <SectionHeader>14. MORTGAGE COMMITMENT</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Due Date:" blankWidth="w-16" disableCheckbox />
      <SmallChecklistItem label="Requested:" blankWidth="w-16" disableCheckbox />
      <SmallChecklistItem label="Received:" blankWidth="w-16" disableCheckbox />
      <SmallChecklistItem label="Sent to Seller" />
    </div>
    <SectionHeader>15. HOME WARRANTY</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Ordered" />
      <SmallChecklistItem label="Sent Invoice to Title Company" />
    </div>
    <SectionHeader>16. BRTI REPAIRS</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Follow Up with Seller" />
      <SmallChecklistItem label="Request Receipts" />
      <SmallChecklistItem label="Repairs Finished" />
      <SmallChecklistItem label="Receipts Received" />
    </div>
    <SectionHeader>17. UTILITY INFO</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Requested from Seller" />
      <SmallChecklistItem label="Received" />
      <SmallChecklistItem label="Sent to Buyer:" blankWidth="w-16" disableCheckbox />
    </div>
    <SectionHeader>18. CLOSING ATTENDANCE</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <span className="font-medium text-[0.62rem]">Client Attendance (Choose One):</span>
      <SmallChecklistItem label="Client Attending" mini />
      <SmallChecklistItem label="Documents Sent to Client:" blankWidth="w-16" disableCheckbox mini />
      <SmallChecklistItem label="Documents Signed Early at Title Company:" blankWidth="w-22" disableCheckbox mini />
    </div>
    <SectionHeader>19. ESCROW CHECK</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Request Escrow Check:" blankWidth="w-16" disableCheckbox />
      <SmallChecklistItem label="Confirm Receipt" />
    </div>
    <SectionHeader>19b. ADDITIONAL INFORMATION</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <span className="text-[0.63rem]">(Choose One):<span className="ml-2">Convention Check / Electronic Check</span></span>
    </div>
    <SectionHeader>20. SETTLEMENT</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="Send Request to Title Company" />
      <SmallChecklistItem label="Clear to Close" />
      <SmallChecklistItem label="Send Settlement Notice" />
      <div className="pl-4 flex flex-col gap-0.5">
        <SmallChecklistItem label="Listing Agent" mini />
        <SmallChecklistItem label="Seller" mini />
        <SmallChecklistItem label="Buyer" mini />
        <SmallChecklistItem label="Buyer's Agent" mini />
        <SmallChecklistItem label="Attorney" mini />
      </div>
      <SmallChecklistItem label="Reserve Conference Room" />
      <SmallChecklistItem label="Schedule Walkthrough" />
      <span className="font-medium text-[0.62rem]">Pre-Settlement Walkthrough Report &amp; Settlement Info Sheet</span>
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
      <SmallChecklistItem label="Upload Closing Documents to Command &amp; Submit" />
      <SmallChecklistItem label="Submit Commission in Command" />
    </div>
    <SectionHeader>20b. ADDITIONAL INFORMATION</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <span className="text-[0.63rem]">Preferred Time: <span className="border-b border-gray-300 inline-block w-20"></span></span>
      <span className="text-[0.63rem]">Preferred Location: <span className="border-b border-gray-300 inline-block w-28"></span></span>
    </div>
    <SectionHeader>21. CLOSE OUT LISTING IN MLS</SectionHeader>
    <div className="mb-1 flex flex-col gap-0.5">
      <SmallChecklistItem label="PMAR" />
      <SmallChecklistItem label="GLVR" />
    </div>
  </>
);

export default TransactionTaskList;


import { cn } from "@/lib/utils";

const TransactionForm = () => {
  return (
    <div className="max-w-[8.5in] min-h-[11in] mx-auto bg-white p-4 text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-4 border border-gray-300 p-2">
        <div className="space-y-2">
          <div className="bg-gray-200 font-semibold px-2">PROPERTY DETAILS</div>
          <div className="space-y-1">
            <div>PROPERTY: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>CLIENT: <span className="border-b border-gray-300 inline-block w-40"></span></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-gray-200 font-semibold px-2">AGENT DETAILS</div>
          <div className="space-y-1">
            <div>AGENT: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>ROLE: <span className="border-b border-gray-300 inline-block w-40"></span></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-gray-200 font-semibold px-2">CLOSING INFORMATION</div>
          <div className="space-y-1">
            <div>DATE: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>TIME: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>LOCATION: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div className="flex items-center gap-2">
              <span>SELLER ATTENDING:</span>
              <input type="checkbox" className="h-4 w-4 border-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-4 space-y-1">
        <div className="bg-blue-50 font-semibold px-2 py-1">QUICK REFERENCE</div>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div>CONTRACT DATE:<div className="border-b border-gray-300 h-6"></div></div>
          <div>ACCEPTANCE DATE:<div className="border-b border-gray-300 h-6"></div></div>
          <div>SALE PRICE:<div className="border-b border-gray-300 h-6"></div></div>
          <div>SELLER'S ASSIST:<div className="border-b border-gray-300 h-6"></div></div>
          <div>EMD DEPOSIT:<div className="border-b border-gray-300 h-6"></div></div>
        </div>
      </div>

      {/* Key Dates & Deadlines */}
      <div className="mt-4 space-y-1">
        <div className="bg-yellow-50 font-semibold px-2 py-1">KEY DATES & DEADLINES</div>
        <div className="grid grid-cols-4 gap-4 text-xs">
          <div>
            <div>EXECUTION DATE:</div>
            <div className="border-b border-gray-300 h-6"></div>
          </div>
          <div>
            <div>DEPOSIT DUE:</div>
            <div className="border-b border-gray-300 h-6"></div>
          </div>
          <div>
            <div>LOAN APP DUE:</div>
            <div className="border-b border-gray-300 h-6"></div>
          </div>
          <div>
            <div>ORDER TITLE WORK BY:</div>
            <div className="border-b border-gray-300 h-6"></div>
          </div>
          <div>
            <div>MTG COMMITMENT DUE:</div>
            <div className="border-b border-gray-300 h-6"></div>
          </div>
          <div>
            <div>BRTI DUE:</div>
            <div className="border-b border-gray-300 h-6"></div>
          </div>
          <div>
            <div>SELLER RESPONSE DUE:</div>
            <div className="border-b border-gray-300 h-6"></div>
          </div>
        </div>
      </div>

      {/* Buyer & Seller Information */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="bg-green-50 font-semibold px-2 py-1">BUYER INFORMATION</div>
          <div className="space-y-2 p-2">
            <div>NAME: <div className="border-b border-gray-300 h-6"></div></div>
            <div>ADDRESS: <div className="border-b border-gray-300 h-6"></div></div>
            <div>PHONE: <div className="border-b border-gray-300 h-6"></div></div>
            <div>EMAIL: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="bg-green-50 font-semibold px-2 py-1">SELLER INFORMATION</div>
          <div className="space-y-2 p-2">
            <div>NAME: <div className="border-b border-gray-300 h-6"></div></div>
            <div>ADDRESS: <div className="border-b border-gray-300 h-6"></div></div>
            <div>PHONE: <div className="border-b border-gray-300 h-6"></div></div>
            <div>EMAIL: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
        </div>
      </div>

      {/* Agent Information */}
      <div className="mt-4 space-y-1">
        <div className="bg-blue-50 font-semibold px-2 py-1">AGENT INFORMATION</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2 space-y-2">
            <div className="font-semibold">BUYER'S AGENT</div>
            <div>NAME: <div className="border-b border-gray-300 h-6"></div></div>
            <div>AGENCY: <div className="border-b border-gray-300 h-6"></div></div>
            <div>PHONE: <div className="border-b border-gray-300 h-6"></div></div>
            <div>EMAIL: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
          <div className="p-2 space-y-2 bg-red-50/30">
            <div className="font-semibold">LISTING AGENT</div>
            <div>NAME: <div className="border-b border-gray-300 h-6"></div></div>
            <div>AGENCY: <div className="border-b border-gray-300 h-6"></div></div>
            <div>PHONE: <div className="border-b border-gray-300 h-6"></div></div>
            <div>EMAIL: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
        </div>
      </div>

      {/* Financial Details */}
      <div className="mt-4 space-y-1">
        <div className="bg-green-50 font-semibold px-2 py-1">FINANCIAL DETAILS</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2 space-y-2">
            <div className="font-semibold">COMMISSION DETAILS</div>
            <div className="grid grid-cols-2 gap-4">
              <div>LIST SIDE %: <div className="border-b border-gray-300 h-6"></div></div>
              <div>BUYER SIDE %: <div className="border-b border-gray-300 h-6"></div></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>TOTAL %: <div className="border-b border-gray-300 h-6"></div></div>
              <div>$ AMOUNT: <div className="border-b border-gray-300 h-6"></div></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>SELLER PAID: <div className="border-b border-gray-300 h-6"></div></div>
              <div>BUYER PAID: <div className="border-b border-gray-300 h-6"></div></div>
            </div>
            <div>TC FEE PAID BY: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
          <div className="p-2 space-y-2">
            <div className="font-semibold">LENDER INFORMATION</div>
            <div>COMPANY: <div className="border-b border-gray-300 h-6"></div></div>
            <div>LOAN OFFICER: <div className="border-b border-gray-300 h-6"></div></div>
            <div>PHONE: <div className="border-b border-gray-300 h-6"></div></div>
            <div>EMAIL: <div className="border-b border-gray-300 h-6"></div></div>
            <div>LOAN TYPE: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
        </div>
      </div>

      {/* Property Requirements */}
      <div className="mt-4 space-y-1">
        <div className="bg-blue-50 font-semibold px-2 py-1">PROPERTY REQUIREMENTS</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2 space-y-2 bg-gray-50">
            <div className="font-semibold">HOA INFORMATION</div>
            <div>HOA NAME: <div className="border-b border-gray-300 h-6"></div></div>
            <div>RESALE CERT EXPIRES: <div className="border-b border-gray-300 h-6"></div></div>
            <div>SELLER SENT PAYMENT ON: <div className="border-b border-gray-300 h-6"></div></div>
            <div>CONTACT: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
          <div className="p-2 space-y-2 bg-gray-50">
            <div className="font-semibold">C/O</div>
            <div>MUNICIPALITY: <div className="border-b border-gray-300 h-6"></div></div>
            <div>REQUESTED: <div className="border-b border-gray-300 h-6"></div></div>
            <div>RECEIVED: <div className="border-b border-gray-300 h-6"></div></div>
            <div>C/O INSPECTION ON: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
        </div>
      </div>

      {/* Service Providers */}
      <div className="mt-4 space-y-1">
        <div className="bg-purple-50 font-semibold px-2 py-1">SERVICE PROVIDERS</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 space-y-2 bg-gray-50">
            <div className="font-semibold">INSPECTION</div>
            <div>INSPECTOR: <div className="border-b border-gray-300 h-6"></div></div>
            <div>CONTINGENCY: <div className="border-b border-gray-300 h-6"></div></div>
            <div>INSPECTION: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
          <div className="p-2 space-y-2 bg-gray-50">
            <div className="font-semibold">LEGAL</div>
            <div>ATTORNEY: <div className="border-b border-gray-300 h-6"></div></div>
            <div>CONTACT: <div className="border-b border-gray-300 h-6"></div></div>
            <div>EMAIL: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
          <div className="p-2 space-y-2 bg-gray-50">
            <div className="font-semibold">TITLE</div>
            <div>COMPANY: <div className="border-b border-gray-300 h-6"></div></div>
            <div>PHONE: <div className="border-b border-gray-300 h-6"></div></div>
            <div>EMAIL: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
        </div>
      </div>

      {/* Documentation Checklist */}
      <div className="mt-4 space-y-1">
        <div className="bg-yellow-50 font-semibold px-2 py-1">DOCUMENTATION CHECKLIST</div>
        <div className="grid grid-cols-4 gap-4 p-2">
          {[
            'AOS (AGREEMENT OF SALE)',
            'DEED (PROPERTY DEED)',
            'DUAL (DUAL AGENCY)',
            'WIRE (WIRE TRANSFER)',
            'CHECK (PAYMENT CHECK)',
            'KPSS (KEYSTONE PROPERTY SERVICES)',
            'SPD (SELLER PROP DISCLOSURE)',
            'RLBPHA (LEAD BASED PAINT)',
            'BEC (BUYER\'S EST. CLOSING)',
            'PREQUAL (PRE-QUALIFICATION)',
            'FYP (FIRST YEAR POLICY)',
            'BAC (BUYER AGENT COMM)',
            'SEC (SELLER EST. CLOSING)',
            'DMN (DEED OF MINOR)',
            'CBC (CLOSING BROKERAGE COMM)',
            'HW (HOME WARRANTY)'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 border-gray-300" />
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* KW ASA Signatures */}
      <div className="mt-4 space-y-1">
        <div className="font-semibold px-2 py-1">KW ASA SIGNATURES</div>
        <div className="flex gap-8 p-2">
          {['BUYER', 'SELLER', 'AGENT'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 border-gray-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-4 space-y-1">
        <div className="bg-gray-100 font-semibold px-2 py-1">ADDITIONAL INFORMATION</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2 space-y-2 bg-gray-50">
            <div className="font-semibold">UTILITIES</div>
            <div>WATER: <div className="border-b border-gray-300 h-6"></div></div>
            <div>SEWER: <div className="border-b border-gray-300 h-6"></div></div>
            <div>ELECTRIC: <div className="border-b border-gray-300 h-6"></div></div>
            <div>GAS: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
          <div className="p-2 space-y-2 bg-pink-50/30">
            <div className="font-semibold">REFERRAL INFORMATION</div>
            <div>DUE TO: <div className="border-b border-gray-300 h-6"></div></div>
            <div>REFERRAL %: <div className="border-b border-gray-300 h-6"></div></div>
            <div>REFERRAL AMOUNT: <div className="border-b border-gray-300 h-6"></div></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-xs text-gray-500">
        FORM VERSION 1.0 | UPDATED: APRIL 2023 | TRANSACTION COORDINATOR FORM
      </div>
    </div>
  );
};

export default TransactionForm;

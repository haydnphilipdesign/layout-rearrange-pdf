
import { cn } from "@/lib/utils";

const TransactionForm = () => {
  return (
    <div className="max-w-[8.5in] min-h-[11in] mx-auto bg-white p-3 text-xs">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-2 border border-gray-300 p-2 mb-2">
        <div className="space-y-1">
          <div className="bg-gray-200 font-semibold px-1 py-0.5">PROPERTY DETAILS</div>
          <div className="space-y-0.5">
            <div>PROPERTY: <span className="border-b border-gray-300 inline-block w-32"></span></div>
            <div>CLIENT: <span className="border-b border-gray-300 inline-block w-32"></span></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="bg-gray-200 font-semibold px-1 py-0.5">AGENT DETAILS</div>
          <div className="space-y-0.5">
            <div>AGENT: <span className="border-b border-gray-300 inline-block w-32"></span></div>
            <div>ROLE: <span className="border-b border-gray-300 inline-block w-32"></span></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="bg-gray-200 font-semibold px-1 py-0.5">CLOSING INFORMATION</div>
          <div className="space-y-0.5">
            <div>DATE: <span className="border-b border-gray-300 inline-block w-32"></span></div>
            <div>TIME: <span className="border-b border-gray-300 inline-block w-32"></span></div>
            <div className="flex items-center gap-1">
              <span>SELLER ATTENDING:</span>
              <input type="checkbox" className="h-3 w-3 border-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mb-2 space-y-0.5">
        <div className="bg-blue-50 font-semibold px-1 py-0.5 text-xs">QUICK REFERENCE</div>
        <div className="grid grid-cols-5 gap-2 text-xs">
          <div>CONTRACT DATE:<div className="border-b border-gray-300 h-4"></div></div>
          <div>ACCEPTANCE:<div className="border-b border-gray-300 h-4"></div></div>
          <div>SALE PRICE:<div className="border-b border-gray-300 h-4"></div></div>
          <div>SELLER'S ASSIST:<div className="border-b border-gray-300 h-4"></div></div>
          <div>EMD DEPOSIT:<div className="border-b border-gray-300 h-4"></div></div>
        </div>
      </div>

      {/* Key Dates & Deadlines */}
      <div className="mb-2 space-y-0.5">
        <div className="bg-yellow-50 font-semibold px-1 py-0.5 text-xs">KEY DATES & DEADLINES</div>
        <div className="grid grid-cols-7 gap-1 text-xs">
          <div>
            <div>EXECUTION:</div>
            <div className="border-b border-gray-300 h-4"></div>
          </div>
          <div>
            <div>DEPOSIT:</div>
            <div className="border-b border-gray-300 h-4"></div>
          </div>
          <div>
            <div>LOAN APP:</div>
            <div className="border-b border-gray-300 h-4"></div>
          </div>
          <div>
            <div>TITLE WORK:</div>
            <div className="border-b border-gray-300 h-4"></div>
          </div>
          <div>
            <div>MTG COMMIT:</div>
            <div className="border-b border-gray-300 h-4"></div>
          </div>
          <div>
            <div>BRTI DUE:</div>
            <div className="border-b border-gray-300 h-4"></div>
          </div>
          <div>
            <div>SELLER RESP:</div>
            <div className="border-b border-gray-300 h-4"></div>
          </div>
        </div>
      </div>

      {/* Buyer & Seller Information */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="space-y-0.5">
          <div className="bg-green-50 font-semibold px-1 py-0.5 text-xs">BUYER INFORMATION</div>
          <div className="grid grid-cols-2 gap-1 p-1 text-xs">
            <div>NAME: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>PHONE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>ADDRESS: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>EMAIL: <span className="border-b border-gray-300 inline-block w-full"></span></div>
          </div>
        </div>
        <div className="space-y-0.5">
          <div className="bg-green-50 font-semibold px-1 py-0.5 text-xs">SELLER INFORMATION</div>
          <div className="grid grid-cols-2 gap-1 p-1 text-xs">
            <div>NAME: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>PHONE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>ADDRESS: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>EMAIL: <span className="border-b border-gray-300 inline-block w-full"></span></div>
          </div>
        </div>
      </div>

      {/* Agent Information */}
      <div className="mb-2 space-y-0.5">
        <div className="bg-blue-50 font-semibold px-1 py-0.5 text-xs">AGENT INFORMATION</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-1 text-xs">
            <div className="font-semibold">BUYER'S AGENT</div>
            <div className="grid grid-cols-2 gap-1">
              <div>NAME: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>PHONE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>AGENCY: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>EMAIL: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            </div>
          </div>
          <div className="p-1 text-xs bg-red-50/30">
            <div className="font-semibold">LISTING AGENT</div>
            <div className="grid grid-cols-2 gap-1">
              <div>NAME: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>PHONE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>AGENCY: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>EMAIL: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Details */}
      <div className="mb-2 space-y-0.5">
        <div className="bg-green-50 font-semibold px-1 py-0.5 text-xs">FINANCIAL DETAILS</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-1 text-xs">
            <div className="font-semibold">COMMISSION DETAILS</div>
            <div className="grid grid-cols-2 gap-1">
              <div>LIST SIDE %: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>BUYER SIDE %: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>TOTAL %: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>$ AMOUNT: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>SELLER PAID: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>TC FEE PAID BY: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            </div>
          </div>
          <div className="p-1 text-xs">
            <div className="font-semibold">LENDER INFORMATION</div>
            <div className="grid grid-cols-2 gap-1">
              <div>COMPANY: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>PHONE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>LOAN OFFICER: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>EMAIL: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>LOAN TYPE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Checklist */}
      <div className="mb-2 space-y-0.5">
        <div className="bg-yellow-50 font-semibold px-1 py-0.5 text-xs">DOCUMENTATION CHECKLIST</div>
        <div className="grid grid-cols-8 gap-1 p-1">
          {[
            'AOS', 'DEED', 'DUAL', 'WIRE', 'CHECK', 'KPSS', 'SPD', 'RLBPHA',
            'BEC', 'PREQUAL', 'FYP', 'BAC', 'SEC', 'DMN', 'CBC', 'HW'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              <input type="checkbox" className="h-2.5 w-2.5 border-gray-300" />
              <span className="text-[0.6rem]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Providers and Property Requirements */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <div className="bg-purple-50 font-semibold px-1 py-0.5 text-xs mb-0.5">SERVICE PROVIDERS</div>
          <div className="grid grid-cols-3 gap-1 text-xs">
            <div className="bg-gray-50 p-1">
              <div className="font-semibold text-[0.6rem]">INSPECTION</div>
              <div>INSPECTOR: <div className="border-b border-gray-300 h-3"></div></div>
              <div>CONTINGENCY: <div className="border-b border-gray-300 h-3"></div></div>
            </div>
            <div className="bg-gray-50 p-1">
              <div className="font-semibold text-[0.6rem]">LEGAL</div>
              <div>ATTORNEY: <div className="border-b border-gray-300 h-3"></div></div>
              <div>CONTACT: <div className="border-b border-gray-300 h-3"></div></div>
            </div>
            <div className="bg-gray-50 p-1">
              <div className="font-semibold text-[0.6rem]">TITLE</div>
              <div>COMPANY: <div className="border-b border-gray-300 h-3"></div></div>
              <div>PHONE: <div className="border-b border-gray-300 h-3"></div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-blue-50 font-semibold px-1 py-0.5 text-xs mb-0.5">PROPERTY REQUIREMENTS</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="p-1 text-xs bg-gray-50">
              <div className="font-semibold text-[0.6rem]">HOA INFORMATION</div>
              <div>HOA NAME: <div className="border-b border-gray-300 h-3"></div></div>
              <div>RESALE CERT: <div className="border-b border-gray-300 h-3"></div></div>
            </div>
            <div className="p-1 text-xs bg-gray-50">
              <div className="font-semibold text-[0.6rem]">C/O</div>
              <div>MUNICIPALITY: <div className="border-b border-gray-300 h-3"></div></div>
              <div>REQUESTED: <div className="border-b border-gray-300 h-3"></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-2 space-y-0.5">
        <div className="bg-gray-100 font-semibold px-1 py-0.5 text-xs">ADDITIONAL INFORMATION</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-1 text-xs bg-gray-50">
            <div className="font-semibold">UTILITIES</div>
            <div className="grid grid-cols-2 gap-1">
              <div>WATER: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>ELECTRIC: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>SEWER: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>GAS: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            </div>
          </div>
          <div className="p-1 text-xs bg-pink-50/30">
            <div className="font-semibold">REFERRAL INFORMATION</div>
            <div className="grid grid-cols-2 gap-1">
              <div>DUE TO: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>REFERRAL %: <span className="border-b border-gray-300 inline-block w-full"></span></div>
              <div>REFERRAL AMOUNT: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            </div>
          </div>
        </div>
      </div>

      {/* KW ASA Signatures */}
      <div className="mb-2 space-y-0.5">
        <div className="font-semibold px-1 py-0.5 text-xs">KW ASA SIGNATURES</div>
        <div className="flex gap-4 p-1">
          {['BUYER', 'SELLER', 'AGENT'].map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              <input type="checkbox" className="h-3 w-3 border-gray-300" />
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[0.6rem] text-gray-500">
        FORM VERSION 1.0 | UPDATED: APRIL 2023 | TRANSACTION COORDINATOR FORM
      </div>
    </div>
  );
};

export default TransactionForm;

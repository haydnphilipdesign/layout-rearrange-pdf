import { cn } from "@/lib/utils";

const TransactionForm = () => {
  return <div className="max-w-[8.5in] min-h-[11in] mx-auto bg-white p-4 text-[0.65rem] print:shadow-none flex flex-col">
      {/* Top Section with reduced margin-bottom */}
      <div className="grid grid-cols-3 gap-2 border-2 border-gray-800 p-2 mb-1.5">
        <div className="space-y-1">
          <div className="bg-gray-200 font-bold text-base px-2 py-1.5 text-center">PROPERTY ADDRESS</div>
          <div className="space-y-2 mt-2">
            <div><span className="border-b border-gray-300 inline-block w-full h-6"></span></div>
            <div><span className="border-b border-gray-300 inline-block w-full h-6"></span></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="bg-gray-200 font-semibold px-2 py-1">CLIENT & AGENT INFORMATION</div>
          <div className="space-y-2">
            <div>CLIENT: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>AGENT: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>ROLE: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>OPP. AGENT: <span className="border-b border-gray-300 inline-block w-40"></span></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="bg-gray-200 font-semibold px-2 py-1">CLOSING INFORMATION</div>
          <div className="space-y-2">
            <div>DATE: <span className="border-b border-gray-300 inline-block w-32"></span></div>
            <div>TIME: <span className="border-b border-gray-300 inline-block w-32"></span></div>
            <div>LOCATION: <span className="border-b border-gray-300 inline-block w-32"></span></div>
            <div className="flex items-center gap-1">
              <span>SELLER ATTENDING:</span>
              <input type="checkbox" className="h-3 w-3 border-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference with reduced spacing */}
      <div className="mb-1">
        <div className="bg-blue-50 font-semibold px-1 py-0.5 border-t-2 border-x-2 border-gray-800">QUICK REFERENCE</div>
        <div className="grid grid-cols-5 gap-1 text-[0.61rem] border-2 border-t-0 border-gray-800 p-1">
          <div>CONTRACT DATE:<div className="border-b border-gray-300 h-3.5"></div></div>
          <div>ACCEPTANCE:<div className="border-b border-gray-300 h-3.5"></div></div>
          <div>SALE PRICE:<div className="border-b border-gray-300 h-3.5"></div></div>
          <div>SELLER'S ASSIST:<div className="border-b border-gray-300 h-3.5"></div></div>
          <div>EMD DEPOSIT:<div className="border-b border-gray-300 h-3.5"></div></div>
        </div>
      </div>

      {/* Key Dates & Deadlines with adjusted padding */}
      <div className="mb-1">
        <div className="bg-yellow-50 font-semibold px-1 py-0.5 border-t-2 border-x-2 border-gray-800">KEY DATES & DEADLINES</div>
        <div className="grid grid-cols-7 gap-1 text-[0.61rem] border-2 border-t-0 border-gray-800 p-1">
          <div>
            <div>EXECUTION:</div>
            <div className="border-b border-gray-300 h-3.5"></div>
          </div>
          <div>
            <div>DEPOSIT:</div>
            <div className="border-b border-gray-300 h-3.5"></div>
          </div>
          <div>
            <div>LOAN APP:</div>
            <div className="border-b border-gray-300 h-3.5"></div>
          </div>
          <div>
            <div>TITLE WORK:</div>
            <div className="border-b border-gray-300 h-3.5"></div>
          </div>
          <div>
            <div>MTG COMMIT:</div>
            <div className="border-b border-gray-300 h-3.5"></div>
          </div>
          <div>
            <div>BRTI DUE:</div>
            <div className="border-b border-gray-300 h-3.5"></div>
          </div>
          <div>
            <div>SELLER RESP:</div>
            <div className="border-b border-gray-300 h-3.5"></div>
          </div>
        </div>
      </div>

      {/* Buyer & Seller Information with reduced gap */}
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div>
          <div className="bg-green-50 font-semibold px-1 py-0.5 border-t-2 border-x-2 border-gray-800">BUYER INFORMATION</div>
          <div className="grid grid-cols-2 gap-1 p-1 text-[0.61rem] border-2 border-t-0 border-gray-800">
            <div>NAME: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>PHONE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>ADDRESS: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>EMAIL: <span className="border-b border-gray-300 inline-block w-full"></span></div>
          </div>
        </div>
        <div>
          <div className="bg-green-50 font-semibold px-1 py-0.5 border-t-2 border-x-2 border-gray-800">SELLER INFORMATION</div>
          <div className="grid grid-cols-2 gap-1 p-1 text-[0.61rem] border-2 border-t-0 border-gray-800">
            <div>NAME: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>PHONE: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>ADDRESS: <span className="border-b border-gray-300 inline-block w-full"></span></div>
            <div>EMAIL: <span className="border-b border-gray-300 inline-block w-full"></span></div>
          </div>
        </div>
      </div>

      {/* Financial Details with optimized spacing */}
      <div className="mb-1">
        <div className="bg-green-50 font-semibold px-2 py-0.5 border-t-2 border-x-2 border-gray-800">FINANCIAL DETAILS</div>
        <div className="grid grid-cols-3 gap-1 border-2 border-t-0 border-gray-800">
          <div className="p-2 text-[0.65rem] border-r border-gray-800">
            <div className="font-semibold mb-1">COMMISSION DETAILS</div>
            <div className="grid grid-cols-2 gap-1">
              <div>LIST SIDE %: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>BUYER SIDE %: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>TOTAL %: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>$ AMOUNT: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>SELLER PAID: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>BUYER PAID: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            </div>
          </div>
          <div className="p-2 text-[0.65rem] border-r border-gray-800">
            <div className="font-semibold mb-1">LENDER INFORMATION</div>
            <div className="grid grid-cols-1 gap-1">
              <div>COMPANY: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>PHONE: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>EMAIL: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            </div>
          </div>
          <div className="p-2 text-[0.65rem]">
            <div className="font-semibold mb-1">REFERRAL INFORMATION</div>
            <div className="grid grid-cols-1 gap-1">
              <div>DUE TO: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
              <div>%: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Providers with adjusted padding */}
      <div className="mb-1">
        <div className="bg-purple-50 font-semibold px-2 py-0.5 border-t-2 border-x-2 border-gray-800">SERVICE PROVIDERS</div>
        <div className="grid grid-cols-4 gap-0 border-2 border-t-0 border-gray-800">
          <div className="p-2 text-[0.65rem] border-r border-gray-800">
            <div className="font-semibold mb-1">INSPECTION</div>
            <div>INSPECTOR: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            <div>CONTINGENCY: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            <div>INSPECTION: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
          </div>
          <div className="p-2 text-[0.65rem] border-r border-gray-800">
            <div className="font-semibold mb-1">LEGAL</div>
            <div>ATTORNEY: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            <div>CONTACT: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            <div>EMAIL: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
          </div>
          <div className="p-2 text-[0.65rem] border-r border-gray-800">
            <div className="font-semibold mb-1">TITLE</div>
            <div>COMPANY: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            <div>PHONE: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            <div>EMAIL: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
          </div>
          <div className="p-2 text-[0.65rem]">
            <div className="font-semibold mb-1">UTILITIES</div>
            <div>WATER: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
            <div>SEWER: <div className="border-b border-gray-400 h-3 mb-1"></div></div>
          </div>
        </div>
      </div>

      {/* Documentation Checklist with flex-grow to use remaining space */}
      <div className="flex-grow">
        <div className="bg-yellow-50 font-semibold px-2 py-0.5 border-t-2 border-x-2 border-gray-800">DOCUMENTATION CHECKLIST</div>
        <div className="grid grid-cols-8 gap-1 p-2 border-2 border-t-0 border-gray-800 h-full">
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
    </div>;
};

export default TransactionForm;

import { cn } from "@/lib/utils";
const TransactionForm = () => {
  return <div className="max-w-[8.5in] min-h-[11in] mx-auto bg-white p-2 text-[0.61rem] print:shadow-none">
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-1 border-2 border-gray-800 p-1 mb-1">
        <div className="space-y-0.5">
          <div className="bg-gray-200 font-bold text-sm px-1 py-1">PROPERTY ADDRESS</div>
          <div className="space-y-1 mt-1">
            <div><span className="border-b border-gray-300 inline-block w-full h-8"></span></div>
          </div>
        </div>
        <div className="space-y-0.5">
          <div className="bg-gray-200 font-semibold px-1 py-0.5">CLIENT & AGENT DETAILS</div>
          <div className="space-y-1">
            <div>CLIENT: <span className="border-b border-gray-300 inline-block w-40"></span></div>
            <div>OPPOSING AGENT: <span className="border-b border-gray-300 inline-block w-40"></span></div>
          </div>
        </div>
        <div className="space-y-0.5">
          <div className="bg-gray-200 font-semibold px-1 py-0.5">CLOSING INFORMATION</div>
          <div className="space-y-1">
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

      {/* Quick Reference */}
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

      {/* Key Dates & Deadlines */}
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

      {/* Buyer & Seller Information */}
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

      {/* Agent Information */}
      <div className="mb-1">
        
        
      </div>

      {/* Financial Details */}
      <div className="mb-1">
        <div className="bg-green-50 font-semibold px-1 py-0.5 border-t-2 border-x-2 border-gray-800">FINANCIAL DETAILS</div>
        <div className="grid grid-cols-3 gap-1 border-2 border-t-0 border-gray-800">
          <div className="p-1 text-[0.61rem] border-r border-gray-800">
            <div className="font-semibold mb-0.5">COMMISSION DETAILS</div>
            <div className="grid grid-cols-2 gap-1">
              <div>LIST SIDE %: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              <div>BUYER SIDE %: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              <div>TOTAL %: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              <div>$ AMOUNT: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              <div>SELLER PAID: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              <div>BUYER PAID: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              
            </div>
          </div>
          <div className="p-1 text-[0.61rem] border-r border-gray-800">
            <div className="font-semibold mb-0.5">LENDER INFORMATION</div>
            <div className="grid grid-cols-1 gap-1">
              <div>COMPANY: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              
              <div>PHONE: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              <div>EMAIL: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              
            </div>
          </div>
          <div className="p-1 text-[0.61rem]">
            <div className="font-semibold mb-0.5">REFERRAL INFORMATION</div>
            <div className="grid grid-cols-1 gap-1">
              
              
              <div>DUE TO: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
              <div>%: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Providers */}
      <div className="mb-1">
        <div className="bg-purple-50 font-semibold px-1 py-0.5 border-t-2 border-x-2 border-gray-800">SERVICE PROVIDERS</div>
        <div className="grid grid-cols-4 gap-0 border-2 border-t-0 border-gray-800">
          <div className="p-1 text-[0.61rem] border-r border-gray-800">
            <div className="font-semibold mb-0.5">INSPECTION</div>
            <div>INSPECTOR: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            <div>CONTINGENCY: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            <div>INSPECTION: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
          </div>
          <div className="p-1 text-[0.61rem] border-r border-gray-800">
            <div className="font-semibold mb-0.5">LEGAL</div>
            <div>ATTORNEY: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            <div>CONTACT: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            <div>EMAIL: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
          </div>
          <div className="p-1 text-[0.61rem] border-r border-gray-800">
            <div className="font-semibold mb-0.5">TITLE</div>
            <div>COMPANY: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            <div>PHONE: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            <div>EMAIL: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
          </div>
          <div className="p-1 text-[0.61rem]">
            <div className="font-semibold mb-0.5">UTILITIES</div>
            
            <div>GAS: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
            <div>WATER: <div className="border-b border-gray-400 h-3 mb-0.5"></div></div>
          </div>
        </div>
      </div>

      {/* Documentation Checklist */}
      <div className="mb-0.5">
        <div className="bg-yellow-50 font-semibold px-1 py-0.5 border-t-2 border-x-2 border-gray-800">DOCUMENTATION CHECKLIST</div>
        <div className="grid grid-cols-8 gap-0.5 p-1 border-2 border-t-0 border-gray-800">
          {['AOS', 'DEED', 'DUAL', 'WIRE', 'CHECK', 'KPSS', 'SPD', 'RLBPHN', 'BEC', 'PREQUAL', 'FYP', 'BAC', 'SEC', 'DMN', 'CBC', 'HW', 'CN'].map((item, i) => <div key={i} className="flex items-center gap-0.5">
              <input type="checkbox" className="h-3 w-3 border-gray-800" />
              <span className="text-[0.61rem]">{item}</span>
            </div>)}
          <div className="flex items-center gap-0.5">
            <input type="checkbox" className="h-3 w-3 border-gray-800" />
            <span className="text-[0.61rem]">BUYER</span>
          </div>
          <div className="flex items-center gap-0.5">
            <input type="checkbox" className="h-3 w-3 border-gray-800" />
            <span className="text-[0.61rem]">SELLER</span>
          </div>
          <div className="flex items-center gap-0.5">
            <input type="checkbox" className="h-3 w-3 border-gray-800" />
            <span className="text-[0.61rem]">AGENT</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>;
};
export default TransactionForm;
import CurrencyConverterForm from "@/components/marketsComponent/CurrencyConverterForm";
import { AlertCircle } from "lucide-react";
import React from "react";

const CurrencyConverter = () => {
  return (
    <section className="px-4 py-16">
      <CurrencyConverterForm />
      <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-4 max-w-6xl mx-auto">
        <AlertCircle className="text-red-500 w-6 h-6 mt-1 shrink-0" />
        <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
          <strong>Important Notice:</strong> This currency converter is provided
          for informational and educational purposes only. The exchange rates
          used are approximations and may not reflect real-time market
          conditions. Results should not be relied upon for financial,
          investment, or trading decisions. Actual rates and conversions may
          vary at the time of transaction. AssexMarkets does not guarantee the
          accuracy or timeliness of the conversion estimates provided.
        </p>
      </div>
    </section>
  );
};

export default CurrencyConverter;

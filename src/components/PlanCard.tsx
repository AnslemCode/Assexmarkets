import clsx from "clsx";
import Badge from "./Badge";
import Button from "./Button";
import { WhiteFlameButtonIcon } from "../../public/icons/ButtonIcons";
import { CheckCircle } from "../../public/icons/AccountTypesIcons";

interface PlanCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  isPro?: boolean;
  customButton?: React.ReactNode;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  benefits,
  icon,
  isPro = false,
  customButton,
}) => {
  return (
    <div
      className={clsx(
        "relative max-w-[352px] min-h-[700px] rounded-2xl p-8 flex flex-col transition-all duration-300 ease-in-out",
        "bg-white shadow-lg hover:bg-[#F3FFFD] hover:shadow-xl hover:border-[#00CCB1] hover:border-2",
        isPro &&
          "border-2 border-[#00CCB1] shadow-[0_0_60px_0_rgba(0,204,177,0.3)]"
      )}
    >
      {isPro && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0dae94] text-white text-sm font-semibold px-4 py-1.5 rounded-t-xl rounded-b-[1px] shadow-md z-10">
          🌟 Best Value
        </div>
      )}

      <div className="absolute top-0 right-0">{icon}</div>

      <div className="my-6">
        <Badge text={title} />
      </div>

      <div
        className={clsx("flex flex-col", isPro ? "mt-12 gap-3" : "mt-16 gap-6")}
      >
        <p className="text-base md:text-lg text-[#3F4550] leading-relaxed">
          {description}
        </p>

        <div className="pt-3 flex justify-center">
          {customButton ?? (
            <Button
              variant="primary"
              text="Register"
              icon={WhiteFlameButtonIcon()}
              size="md"
              // fullWidth
            />
          )}
        </div>
      </div>

      <ul className="space-y-3 mt-12">
        {benefits.map((benefit, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-base md:text-lg text-[#3F4550] leading-snug"
          >
            <span className="flex-shrink-0 mt-[2px]">
              <CheckCircle />
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

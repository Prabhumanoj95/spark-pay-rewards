import { useNavigate } from "react-router-dom";
import { Smartphone, Fuel, Landmark, Zap, Droplets, Tv } from "lucide-react";
const services = [{
  icon: Smartphone,
  label: "Mobile Recharge",
  path: "/recharge",
  color: "bg-blue-100 text-blue-600"
}, {
  icon: Fuel,
  label: "FASTag Recharge",
  path: "/fastag",
  color: "bg-green-100 text-green-600"
}, {
  icon: Landmark,
  label: "Loan Payment",
  path: "/loan",
  color: "bg-amber-100 text-amber-600"
}, {
  icon: Zap,
  label: "Electricity",
  path: "#",
  color: "bg-yellow-100 text-yellow-600"
}, {
  icon: Droplets,
  label: "Water Bill",
  path: "#",
  color: "bg-cyan-100 text-cyan-600"
}, {
  icon: Tv,
  label: "DTH Recharge",
  path: "#",
  color: "bg-purple-100 text-purple-600"
}];
const BBPSSection = () => {
  const navigate = useNavigate();
  return <div className="rounded-2xl bg-card p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Recharge & Pay Bills
        </h3>
        <span className="rounded-full bg-spark-blue-light px-3 py-1 text-xs font-semibold text-spark-blue">
          BBPS
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {services.map(service => {})}
      </div>
    </div>;
};
export default BBPSSection;
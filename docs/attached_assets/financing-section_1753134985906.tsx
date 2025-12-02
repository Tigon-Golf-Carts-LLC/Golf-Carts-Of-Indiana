import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function FinancingSection() {
  const [cartPrice, setCartPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [term, setTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculatePayment = () => {
    const price = parseFloat(cartPrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const months = parseInt(term) || 36;
    const principal = price - down;
    
    // Simple calculation assuming 0% APR
    const payment = principal / months;
    setMonthlyPayment(payment);
  };

  const benefits = [
    "0% APR financing available with approved credit",
    "Terms up to 60 months available",
    "Quick pre-approval process",
    "Trade-ins accepted",
  ];

  return (
    <section id="financing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Easy Financing Options
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer flexible financing solutions to help you get the golf cart you want with payments that fit your budget.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Apply for Financing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Payment Calculator</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cart-price" className="text-white">Cart Price</Label>
                <Input
                  id="cart-price"
                  type="number"
                  placeholder="$10,000"
                  value={cartPrice}
                  onChange={(e) => setCartPrice(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="down-payment" className="text-white">Down Payment</Label>
                <Input
                  id="down-payment"
                  type="number"
                  placeholder="$2,000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="term" className="text-white">Term (Months)</Label>
                <Select value={term} onValueChange={setTerm}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                    <SelectItem value="48">48 months</SelectItem>
                    <SelectItem value="60">60 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={calculatePayment}
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                Calculate Payment
              </Button>
              {monthlyPayment !== null && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm">Estimated Monthly Payment:</p>
                  <p className="text-2xl font-bold">${monthlyPayment.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

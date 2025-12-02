import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [selectedInterest, setSelectedInterest] = useState("");

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      setSelectedInterest("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate({ ...data, interest: selectedInterest });
  };

  return (
    <section id="contact" className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Visit Our Showrooms
          </h2>
          <p className="text-lg text-gray-600">
            Come see our extensive inventory and speak with our knowledgeable staff
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-dark mb-6">Contact Information</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent mr-4" />
                  <div>
                    <div className="font-semibold text-neutral-dark">Phone</div>
                    <div className="text-gray-600">1-844-844-6638</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-4" />
                  <div>
                    <div className="font-semibold text-neutral-dark">Email</div>
                    <div className="text-gray-600">info@njgolfcarts.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-accent mr-4" />
                  <div>
                    <div className="font-semibold text-neutral-dark">Hours</div>
                    <div className="text-gray-600">
                      Mon-Fri: 9AM-5PM<br />
                      Sat: 9AM-5PM<br />
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-neutral-dark mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-primary text-xl">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary text-xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary text-xl">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary text-xl">
                    <i className="fab fa-yelp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-dark mb-6">Send Us a Message</h3>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      {...form.register("firstName")}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      {...form.register("lastName")}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="interest">Interest</Label>
                  <Select value={selectedInterest} onValueChange={setSelectedInterest}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="denago">DENAGO</SelectItem>
                      <SelectItem value="evolution">EVOLUTION</SelectItem>
                      <SelectItem value="swift-ev">SWIFT EV</SelectItem>
                      <SelectItem value="rentals">RENTALS</SelectItem>
                      <SelectItem value="service">SERVICE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    placeholder="Tell us about your needs..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

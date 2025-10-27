"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Loader2, 
  CheckCircle,
  XCircle 
} from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type SubmissionStatus = {
  type: "success" | "error" | null;
  message: string | null;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>({ 
    type: null, 
    message: null 
  });

  useEffect(() => {
    if (submissionStatus.type) {
      const timer = setTimeout(() => {
        setSubmissionStatus({ type: null, message: null });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const onSubmit = async (data: FormValues) => {
    try {
   
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      console.log("Form Data:", data);

      setSubmissionStatus({ 
        type: "success", 
        message: "Your message has been sent successfully!" 
      });
      reset();

    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus({ 
        type: "error", 
        message: "Something went wrong. Please try again." 
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or want to work together? We had love to hear from you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="relative grid lg:grid-cols-5 gap-12 lg:gap-0 items-start">
          
          {/* Contact Info (Left Column) */}
          <div className="lg:col-span-2 bg-blue-600 dark:bg-blue-800 rounded-xl shadow-lg p-8 md:p-12 h-full flex flex-col gap-10 lg:pt-12 text-white">
            <h3 className="text-3xl font-semibold">
              Reach Out Directly
            </h3>
            <p className="text-blue-100 dark:text-blue-200 text-base leading-relaxed">
              You can also reach us via the following methods. We re available 
              from 9 AM to 6 PM, Sunday through Thursday.
            </p>
            <div className="space-y-6">
              <a 
                href="mailto:support@easypay.com" 
                className="flex items-center gap-4 group text-lg"
              >
                <Mail className="w-6 h-6 text-blue-200" />
                <span className="text-blue-50 group-hover:text-white transition-colors">
                  support@easypay.com
                </span>
              </a>
              <a 
                href="tel:+880123456789" 
                className="flex items-center gap-4 group text-lg"
              >
                <Phone className="w-6 h-6 text-blue-200" />
                <span className="text-blue-50 group-hover:text-white transition-colors">
                  +880 123 456 789
                </span>
              </a>
              <div className="flex items-start gap-4 text-lg">
                <MapPin className="w-6 h-6 text-blue-200 mt-1 shrink-0" />
                <span className="text-blue-50">
                  123 Easy Street, Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:-ml-12 z-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-900 shadow-2xl rounded-xl p-8 md:p-12 flex flex-col gap-8"
            >
              
     
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`peer block w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 placeholder-transparent transition-all duration-300 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500 dark:focus:ring-red-400"
                      : "border-gray-300 dark:border-gray-700 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                  }`}
                  placeholder="Full Name"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                <label 
                  htmlFor="name" 
                  className={`absolute left-4 -top-2.5 text-sm transition-all duration-300 
                             peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400
                             peer-focus:-top-2.5 peer-focus:text-sm 
                             ${errors.name 
                               ? 'text-red-600 dark:text-red-400' 
                               : 'text-blue-600 dark:text-blue-400 peer-focus:text-blue-600 dark:peer-focus:text-blue-400'}
                             bg-white dark:bg-gray-900 px-1`}
                >
                  Full Name
                </label>
                {errors.name && (
                  <p className="text-red-500 mt-1.5 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`peer block w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 placeholder-transparent transition-all duration-300 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500 dark:focus:ring-red-400"
                      : "border-gray-300 dark:border-gray-700 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                  }`}
                  placeholder="Email Address"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-4 -top-2.5 text-sm transition-all duration-300 
                             peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400
                             peer-focus:-top-2.5 peer-focus:text-sm 
                             ${errors.email 
                               ? 'text-red-600 dark:text-red-400' 
                               : 'text-blue-600 dark:text-blue-400 peer-focus:text-blue-600 dark:peer-focus:text-blue-400'}
                             bg-white dark:bg-gray-900 px-1`}
                >
                  Email Address
                </label>
                {errors.email && (
                  <p className="text-red-500 mt-1.5 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`peer block w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 placeholder-transparent transition-all duration-300 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500 dark:focus:ring-red-400"
                      : "border-gray-300 dark:border-gray-700 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                  }`}
                  placeholder="Write your message..."
                  aria-invalid={errors.message ? "true" : "false"}
                />
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 -top-2.5 text-sm transition-all duration-300 
                             peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400
                             peer-focus:-top-2.5 peer-focus:text-sm 
                             ${errors.message 
                               ? 'text-red-600 dark:text-red-400' 
                               : 'text-blue-600 dark:text-blue-400 peer-focus:text-blue-600 dark:peer-focus:text-blue-400'}
                             bg-white dark:bg-gray-900 px-1`}
                >
                  Message
                </label>
                {errors.message && (
                  <p className="text-red-500 mt-1.5 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center bg-blue-600 hover:bg-accent text-white font-semibold px-6 py-3.5 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {submissionStatus.type && (
                <div 
                  className={`flex items-center gap-3 p-4 rounded-lg mt-2 ${
                    submissionStatus.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700' 
                    : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700'
                  }`}
                  role="alert"
                >
                  {submissionStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submissionStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


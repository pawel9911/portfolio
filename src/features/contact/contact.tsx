import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Input,
  PageTransition,
  Socials,
  Textarea,
  Toast,
  TypingText,
} from "@components";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(defaultValues);
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_APP_EMAIL_JS_API_KEY,
      )
      .then(() => {
        setFormData(defaultValues);
        setIsSuccess(true);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const onAnimationComplete = () => {
    setIsPending(false);
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="mb-12 lg:mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title uppercase tracking-[0.2em]"
          >
            Contact
          </motion.h1>
          <div className="h4 text-red-500 font-mono mt-2">
            <TypingText texts={["Get in touch"]} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-12">
          <form
            onSubmit={onSubmit}
            className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 flex flex-col gap-8 w-full rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <AnimatePresence>
              {isPending && (
                <Toast
                  isError={isError}
                  isSuccess={isSuccess}
                  onAnimationComplete={onAnimationComplete}
                />
              )}
            </AnimatePresence>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h2 text-white"
            >
              Let's work{" "}
              <span className="text-red-500 font-signature italic">
                together
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                name="firstName"
                placeholder="Jan"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="Kowalski"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                from="right"
              />
              <Input
                label="Email Address"
                name="email"
                placeholder="jan@kowalski.pl"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                from="right"
              />
            </div>

            <Textarea
              label="Your Message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
              <Button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] active:scale-95"
              >
                Send Message
              </Button>

              <Socials
                listStyles="flex gap-4"
                listElementStyles="p-3 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 text-2xl"
              />
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactSection;

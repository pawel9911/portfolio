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
} from "../../components";

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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_APP_EMAIL_JS_API_KEY
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
      <div className="container">
        <div className="mb-8 lg:mb-10">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 3,
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h1 text-center uppercase tracking-widest"
          >
            Contact
          </motion.h1>
          <p className="h3 text-center">
            <TypingText texts={["Get in touch"]} />
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-10 mb-8 lg:mb-0">
          <form
            onSubmit={onSubmit}
            className="relative bg-nav flex flex-col gap-5 w-full border rounded-xl p-10 px-8 sm:px-10 md:p-12 lg:p-14 lg:py-16 xl:py-20 max-w-xl lg:max-w-2xl xl:max-w-3xl"
          >
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
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="h2"
            >
              Let's work together
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-3">
              <Input
                label="Your first name"
                name="firstName"
                placeholder="Enter your first name"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                label="Your last name"
                name="lastName"
                placeholder="Enter your last name"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                from="right"
              />
              <Input
                label="Your email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Subject"
                name="subject"
                placeholder="Enter subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                from="right"
              />
            </div>
            <Textarea
              label="Your Message"
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit">Send Message</Button>
          </form>
          <Socials listElementStyles="text-3xl lg:text-4xl" />
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactSection;

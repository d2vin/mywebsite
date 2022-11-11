import React, { useState, useCallback } from 'react';
import axios from 'axios';

const ContactMe: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleOnChange = useCallback(
    (e: { persist: () => void; target: { id: any; value: any } }) => {
      e.persist();
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    },
    []
  );

  const handleServerResponse = useCallback((ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        fullName: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setStatus((prevStatus) => ({
        ...prevStatus,
        submitting: true,
      }));
      axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((_response) => {
        handleServerResponse(true, 'Message sent!');
      });
    },
    [inputs, handleServerResponse]
  );
  return (
    <div className="flex flex-col justify-center pt-20">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-lg pt-8 px-10 text-center">
          Send me a message if you have any questions or want to work together.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-10 min-w-full lg:min-w-[500px]"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>:{' '}
              <span className="block sm:inline-table">{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div
              className="text-white text-xl font-bold px-4 py-3 rounded relative text-center"
              role="alert"
            >
              Thanks for reaching out!
              <br />
              I&apos;ll be sure to get back to you shortly.
            </div>
          ) : (
            <>
              <input
                id="fullName"
                name="fullName"
                required
                maxLength={128}
                type="text"
                placeholder="Your name"
                className="bg-neutral-100 text-black dark:bg-black dark:text-white outline-none border-2 border-black dark:border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.fullName}
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={128}
                placeholder="Your E-mail"
                className="bg-neutral-100 text-black dark:bg-black dark:text-white outline-none border-2 border-black dark:border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.email}
              />
              <textarea
                name="message"
                id="message"
                required
                maxLength={1048576}
                placeholder="Additional information"
                className="bg-neutral-100 dark:bg-black text-white dark:text-white outline-none border-2 dark:border-white border-black rounded-3xl px-8 py-6 min-h-[16em]"
                onChange={handleOnChange}
                value={inputs.message}
              ></textarea>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="bg-black text-white dark:bg-white dark:text-black rounded-3xl px-8 py-2"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? 'Submit'
                      : 'Submitted'
                    : 'Sending...'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

import { CMS_NAME } from '../lib/constants'
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe"

const url = "https://speekes.us1.list-manage.com/subscribe/post?u=58af66690a3ba5bf43aa56d61&amp;id=96f91ca039";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <>
      <div className="rounded-md bg-white p-3">
        <input
          className="w-3/5"
          style={{ fontSize: "1em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Enter your email"
        />
        <button 
          className="rounded-md text-center text-white font-bold w-2/5 p-3"
          style={{ backgroundColor: "#AAD400" }} onClick={submit}>
          SUBSCRIBE
        </button>
      </div>
      {status === "sending" && <div style={{ color: "back" }}>Sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </>
  );
};

const Intro = () => {
  return (
    <>
      <section className="items-center md:justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
          <div className="col-auto"
          style={
            { backgroundImage: "url(/images/network_nodes.svg), linear-gradient(172.07deg, #DBFF4A 1.85%, #AAD400 85.01%)",
              backgroundPositionX: "left", backgroundPositionY: "top", backgroundSize: "auto", backgroundRepeat: "no-repeat"
            }
            }>
            <div className="m-5 md:m-20 text-black"
              // style={{ backgroundImage: "url(/images/network_nodes.svg)",  }}
            >
              {/* <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8"> */}
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-2 mt-8">
                <img src="/images/logo.svg" alt="logo" className="h-8 md:h-16" />
              </h2>
              {/* </h1> */}
              <h3 className="mt-16 md:mt-40 text-2xl md:text-3xl font-bold">
              You own your data.
              </h3>
              <h1 className="mt-8 text-3xl md:text-4xl font-bold">
                Welcome to your <br/>
                new 3rd Generation <br/>
                Social Media platform
              </h1>
              <h4 className="mt-3 text-2xl font-bold">
                A blockchain based platform with 
                a social media as layer two solution.
              </h4>
              <div className="mt-16 md:mt-40">
                {/* <MailchimpSubscribe url={url}/> */}
                <MailchimpSubscribe
                  url={url}
                  render={({ subscribe, status, message }) => (
                    <CustomForm
                      status={status}
                      message={message}
                      onValidated={formData => subscribe(formData)}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="col-auto item-center text-center">
            <img src="/images/screens.png" className="w-full inline-block dark:hidden" />
            <img src="/images/screens-dark.png" className="w-full inline-block hidden dark:block" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
